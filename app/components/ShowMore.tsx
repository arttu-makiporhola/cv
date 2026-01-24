import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface ShowMoreProps {
    text?: string
    textOpen?: string
    className?: string
    children?: React.ReactNode
}

export default function ShowMore({ text, textOpen, className = 'print:hidden', children }: ShowMoreProps) {
    const { t } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    let displayText = text || t('components.ShowMore.showMore')
    let displayOpenText = textOpen || t('components.ShowMore.showLess')
    return (
        <div className={className}>
            {isOpen && children}
            <button className='h-4 cursor-pointer text-stone-700 hover:underline' onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? displayText : displayOpenText}
            </button>
        </div>
    )
}
