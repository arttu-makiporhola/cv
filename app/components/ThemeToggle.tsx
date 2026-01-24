'use client'

import { useEffect, useState, memo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { MoonIcon, SunIcon } from './icons'
import IconButton from './IconButton'

function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'dark'
        const attr = document.documentElement.getAttribute('data-theme')
        return attr === 'light' ? 'light' : 'dark'
    })
    const { t, language } = useLanguage()

    useEffect(() => {
        // Sync state with data attribute that was set by blocking script
        const attr = localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme')
        setTheme(attr === 'light' ? 'light' : 'dark')
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    // Don't render until language is determined to avoid flash
    if (!language) return null

    return <IconButton icon={theme === 'light' ? <SunIcon /> : <MoonIcon />} onClick={() => toggleTheme()} title={t('actions.toggleTheme')?.toString()} />
}

export default memo(ThemeToggle)
