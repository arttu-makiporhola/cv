'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { PlayCircleIcon } from './icons'

interface HoverVideoProps {
    posterSrc: string
    videoSrc: string
    alt?: string
    className?: string
    loop?: boolean
    muted?: boolean
    preloadInView?: boolean // start loading once element is in viewport
}

export default function HoverVideo({ posterSrc, videoSrc, alt = '', className = '', loop = true, muted = true, preloadInView = true }: HoverVideoProps) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [inView, setInView] = useState(!preloadInView)
    const [isPlaying, setIsPlaying] = useState(false)
    const [_videoLoaded, setVideoLoaded] = useState(false)
    const [hasStarted, setHasStarted] = useState(false)

    // IntersectionObserver to lazy-load video
    useEffect(() => {
        if (!preloadInView || inView) return
        const el = wrapperRef.current
        if (!el || typeof IntersectionObserver === 'undefined') {
            setInView(true)
            return
        }
        const io = new IntersectionObserver(
            entries => {
                if (entries.some(e => e.isIntersecting)) {
                    setInView(true)
                    io.disconnect()
                }
            },
            { rootMargin: '200px' }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [preloadInView, inView])

    // play / pause helpers
    const playVideo = async () => {
        const v = videoRef.current
        if (!v) return
        try {
            await v.play()
            setIsPlaying(true)
            // mark that we have started playback at least once
            setHasStarted(true)
        } catch {
            setIsPlaying(false)
        }
    }

    const pauseVideo = () => {
        const v = videoRef.current
        if (!v) return
        try {
            v.pause()
        } catch {}
        setIsPlaying(false)
    }

    // hover / focus / keyboard / touch handlers
    const handleMouseEnter = () => {
        playVideo()
    }
    const handleMouseLeave = () => {
        pauseVideo()
    }

    // on video loadedmetadata
    useEffect(() => {
        const v = videoRef.current
        if (!v) return
        const onLoaded = () => setVideoLoaded(true)
        v.addEventListener('loadedmetadata', onLoaded)
        return () => v.removeEventListener('loadedmetadata', onLoaded)
    }, [inView])

    return (
        <div ref={wrapperRef} className={`relative overflow-hidden ${className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} role='figure' aria-label={alt || 'preview'}>
            {/* Poster image shown until the video has started playing at least once */}
            {!hasStarted && (
                <div className='w-full h-full'>
                    <Image src={posterSrc} alt={alt} width={4} height={1} className='object-cover h-full w-full' />
                </div>
            )}

            {/* Video overlay — only inserted/loaded when inView */}
            {inView && (
                <video
                    ref={videoRef}
                    className='absolute inset-0 w-full h-full object-cover'
                    muted={muted}
                    loop={loop}
                    playsInline
                    preload='metadata'
                    poster={posterSrc}
                    // show video visually when playing — once it has started we keep it visible (opacity 1)
                    style={{ opacity: hasStarted ? 1 : isPlaying ? 1 : 0, pointerEvents: isPlaying ? 'auto' : 'none' }}>
                    <source src={videoSrc} type='video/mp4' />
                    {/* fallback content */}
                </video>
            )}

            <div className='absolute w-full h-full top-0 hover:inset-shadow-md' />

            <div
                className='absolute bottom-1 right-1 w-10 h-10 text-black opacity-1 transition-opacity'
                style={{
                    opacity: isPlaying ? 0 : 1,
                }}>
                <PlayCircleIcon />
            </div>
        </div>
    )
}
