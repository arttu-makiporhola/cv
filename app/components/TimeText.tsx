'use client'
import { memo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface TimeTextProps {
    time: Date
    className?: string
    options?: Intl.DateTimeFormatOptions
}
const TimeText: React.FC<TimeTextProps> = ({ time, className = '', options }) => {
    const { language } = useLanguage()
    if (!language) return <span className='text-transparent'>-</span>

    const formattedTime = time.toLocaleDateString(language, options)
    const title = time.toISOString().split('T')[0]

    return (
        <time dateTime={time.toISOString()} title={title} className={className}>
            {formattedTime}
        </time>
    )
}

export default memo(TimeText)
