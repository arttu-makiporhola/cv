'use client'

import { useEffect, useRef, useState } from 'react'
import type { Vector3 } from 'three'

interface SparkViewerProps {
    splatUrl: string
    className?: string
    onLoad?: () => void
    position?: Vector3
    rotation?: Vector3
    scale?: number
    maxRotation?: number
}

// Increment on each HMR to force effect re-run
const MODULE_VERSION = Date.now()

export default function SparkViewer({
    splatUrl,
    className = '',
    onLoad,
    position,
    rotation,
    scale,
    maxRotation = Math.PI / 6, // 30 degrees
}: SparkViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const sceneRef = useRef<{ dispose: () => void } | null>(null)
    const [version] = useState(MODULE_VERSION)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Clean up existing scene (handles HMR)
        if (sceneRef.current) {
            sceneRef.current.dispose()
            sceneRef.current = null
        }

        let disposed = false

        ;(async () => {
            const [THREE, { SplatMesh }, { OrbitControls }] = await Promise.all([import('three'), import('@sparkjsdev/spark'), import('three/addons/controls/OrbitControls.js')])

            if (disposed || !container.isConnected) return

            // Clear container
            container.replaceChildren()

            const { clientWidth: width, clientHeight: height } = container
            const scene = new THREE.Scene()
            const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
            camera.position.set(0, 0, -6)
            // Flip camera up to match SparkJS coordinate system
            camera.up.set(0, -1, 0)
            camera.updateProjectionMatrix()

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
                premultipliedAlpha: false,
                preserveDrawingBuffer: true,
            })
            renderer.setClearColor(0x000000, 0)

            // Hide canvas until splat is loaded
            const canvas = renderer.domElement
            canvas.style.opacity = '0'
            canvas.style.transition = 'opacity 0.25s ease-in'
            canvas.style.background = 'transparent'

            renderer.setSize(width, height)
            renderer.setPixelRatio(devicePixelRatio)
            container.appendChild(canvas)

            const orbitControlsObj = new OrbitControls(camera, canvas)
            orbitControlsObj.enableDamping = true
            orbitControlsObj.dampingFactor = 0.05
            orbitControlsObj.enableZoom = false
            orbitControlsObj.enablePan = false

            // Limit rotation angles (in radians)
            orbitControlsObj.minAzimuthAngle = Math.PI - maxRotation
            orbitControlsObj.maxAzimuthAngle = Math.PI + maxRotation
            orbitControlsObj.minPolarAngle = Math.PI / 2 - maxRotation
            orbitControlsObj.maxPolarAngle = Math.PI / 2 + maxRotation

            orbitControlsObj.target.set(0, 0, 0)
            orbitControlsObj.update()

            // animation setup

            // Store default spherical position for auto-return
            const defaultSpherical = new THREE.Spherical().setFromVector3(camera.position.clone().sub(orbitControlsObj.target))
            let isInteracting = false
            let returnStartTime = Infinity // Don't return until after first interaction
            let returnStartSpherical: InstanceType<typeof THREE.Spherical> | null = null
            // Base timing values (ms)
            const BASE_IDLE_DELAY = 1000 // ms before starting to return
            const BASE_RETURN_DURATION = 5000 // to return

            // Wobble settings (base values)
            const wobbleRadius = maxRotation / 2 // Half of max rotation (30 degrees)
            const BASE_WOBBLE_PERIOD = 10000 // for full circle
            const BASE_WOBBLE_RAMP = 5000 // to spiral out to full wobble

            // Apply startupSpeed multiplier
            const startupSpeed = 1
            const idleDelay = BASE_IDLE_DELAY / startupSpeed
            const returnDuration = BASE_RETURN_DURATION / startupSpeed
            const wobblePeriod = BASE_WOBBLE_PERIOD / startupSpeed
            const wobbleRampDuration = BASE_WOBBLE_RAMP / startupSpeed

            let wobbleStartTime = -1 // Will be set on first animation frame
            let isWobbling = true // Start wobbling right away

            // Ease-in-out cubic function (slow start, slow end)
            const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

            // Helper to lerp spherical coordinates with shortest-angle interpolation
            const lerpSpherical = (a: InstanceType<typeof THREE.Spherical>, b: InstanceType<typeof THREE.Spherical>, t: number) => {
                const TWO_PI = Math.PI * 2

                const shortestDelta = (from: number, to: number) => {
                    let d = (to - from) % TWO_PI
                    if (d < -Math.PI) d += TWO_PI
                    if (d > Math.PI) d -= TWO_PI
                    return d
                }

                const lerpAngle = (from: number, to: number, tt: number) => from + shortestDelta(from, to) * tt

                return new THREE.Spherical(a.radius + (b.radius - a.radius) * t, lerpAngle(a.phi, b.phi, t), lerpAngle(a.theta, b.theta, t))
            }

            orbitControlsObj.addEventListener('start', () => {
                isInteracting = true
                returnStartSpherical = null
                isWobbling = false
                gridHelper.visible = true
                // Clear text selection to avoid visual glitches while dragging
                window.getSelection()?.removeAllRanges()
            })
            orbitControlsObj.addEventListener('end', () => {
                isInteracting = false
                returnStartTime = performance.now() + idleDelay
                returnStartSpherical = null
                // Restart wobble with fresh spiral after return completes
                wobbleStartTime = performance.now() + idleDelay + returnDuration
                isWobbling = true
                gridHelper.visible = false
            })

            const splat = new SplatMesh({ url: splatUrl })

            if (position) {
                splat.position.set(position.x, position.y, position.z)
            }
            if (rotation) {
                splat.rotation.setFromVector3(rotation)
            }
            if (scale) {
                splat.scale.multiplyScalar(scale)
            }

            scene.add(splat)

            // Grid helper - visible only when dragging
            const gridHelper = new THREE.GridHelper(4, 10, 0x888888, 0x444444)
            gridHelper.position.set(0, 0, 0)
            gridHelper.visible = false
            scene.add(gridHelper)

            // Fade in when splat is loaded
            splat.initialized.then(() => {
                if (!disposed) {
                    renderer.domElement.style.opacity = '1'
                    setIsLoaded(true)
                    onLoad?.()
                }
            })

            const onResize = () => {
                const { clientWidth: w, clientHeight: h } = container
                camera.aspect = w / h
                camera.updateProjectionMatrix()
                renderer.setSize(w, h)
            }
            addEventListener('resize', onResize)

            // animation loop
            let animationId = 0
            const animate = () => {
                if (disposed) return
                animationId = requestAnimationFrame(animate)

                const now = performance.now()

                // Gradually return to default orbit position when idle
                if (!isInteracting && now >= returnStartTime) {
                    // Capture starting spherical position
                    if (!returnStartSpherical) {
                        returnStartSpherical = new THREE.Spherical().setFromVector3(camera.position.clone().sub(orbitControlsObj.target))
                    }

                    const elapsed = now - returnStartTime
                    const progress = Math.min(elapsed / returnDuration, 1)
                    const easedProgress = easeInOutCubic(progress)

                    // Lerp spherical coordinates and set camera position
                    const currentSpherical = lerpSpherical(returnStartSpherical, defaultSpherical, easedProgress)
                    const offset = new THREE.Vector3().setFromSpherical(currentSpherical)
                    camera.position.copy(orbitControlsObj.target).add(offset)
                }

                // Circular wobble animation when idle at default position
                // Skip wobble while returning to default (let return animation complete first)
                const isReturning = !isInteracting && now >= returnStartTime && returnStartSpherical && now - returnStartTime < returnDuration

                if (isWobbling && !isInteracting && !isReturning) {
                    // Initialize wobbleStartTime on first frame
                    if (wobbleStartTime < 0) {
                        wobbleStartTime = now
                    }

                    if (now >= wobbleStartTime) {
                        const wobbleElapsed = now - wobbleStartTime
                        const rampProgress = Math.min(wobbleElapsed / wobbleRampDuration, 1)
                        // Ease-in amplitude: cubic for very slow start
                        const easedAmplitude = rampProgress * rampProgress * rampProgress
                        const wobbleAmplitude = easedAmplitude * wobbleRadius

                        // Final angular velocity (radians per ms)
                        const finalAngularVelocity = (Math.PI * 2) / wobblePeriod

                        let angle: number
                        if (rampProgress < 1) {
                            // Ease-in angular velocity from 0 to finalAngularVelocity
                            // Velocity = finalAngularVelocity * (t/T)²
                            // Integrate to get position: finalAngularVelocity * T * (t/T)³ / 3
                            angle = (finalAngularVelocity * wobbleRampDuration * (rampProgress * rampProgress * rampProgress)) / 3
                        } else {
                            // Continue at constant velocity, starting from where ramp ended
                            const rampEndAngle = (finalAngularVelocity * wobbleRampDuration) / 3
                            const afterRampElapsed = wobbleElapsed - wobbleRampDuration
                            angle = rampEndAngle + finalAngularVelocity * afterRampElapsed
                        }

                        // Circular motion at current amplitude
                        const wobbleSpherical = new THREE.Spherical(defaultSpherical.radius, defaultSpherical.phi + Math.sin(angle) * wobbleAmplitude, defaultSpherical.theta + Math.cos(angle) * wobbleAmplitude)

                        const offset = new THREE.Vector3().setFromSpherical(wobbleSpherical)
                        camera.position.copy(orbitControlsObj.target).add(offset)
                    }
                }

                orbitControlsObj.update()
                renderer.render(scene, camera)
            }
            animate()

            sceneRef.current = {
                dispose: () => {
                    disposed = true
                    cancelAnimationFrame(animationId)
                    removeEventListener('resize', onResize)
                    orbitControlsObj.dispose()
                    splat.dispose?.()
                    renderer.dispose()
                    renderer.domElement.remove()
                    scene.clear()
                    sceneRef.current = null
                },
            }
        })()

        return () => {
            disposed = true
            if (sceneRef.current) {
                sceneRef.current.dispose()
                sceneRef.current = null
            }
        }
    }, [splatUrl, version])

    return <div ref={containerRef} className={`h-full w-full bg-transparent ${isLoaded ? 'cursor-pointer' : ''} ${className}`} style={{ background: 'transparent' }} />
}
