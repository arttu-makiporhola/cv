import { useRef, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface ShowMoreProps {
    text?: string
    textOpen?: string
    showInPrint?: boolean
    children?: React.ReactNode
}

export default function ShowMore({ text, textOpen, showInPrint = false, children }: ShowMoreProps) {
    const { t } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    const handleToggle = () => {
        if (isOpen) {
            const hiddenHeight = contentRef.current?.offsetHeight ?? 0
            setIsOpen(false)
            window.scrollBy({ top: -hiddenHeight })
        } else {
            setIsOpen(true)
        }
    }

    let displayText = text || t('components.ShowMore.showMore')
    let displayOpenText = textOpen || t('components.ShowMore.showLess')
    return (
        <div>
            <div ref={contentRef} className={`${isOpen ? '' : 'hidden'} ${!showInPrint ? '' : 'print:block'}`}>
                {children}
            </div>
            <button className='print:hidden h-4 cursor-pointer text-stone-700 hover:underline' onClick={handleToggle}>
                {!isOpen ? displayText : displayOpenText}
            </button>
        </div>
    )
}
