'use client'

import { useEffect, useState, memo } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { PrintIcon } from './icons'
import IconButton from './IconButton'

function PrintButton() {
    const { t } = useLanguage()

    return <IconButton icon={<PrintIcon />} onClick={() => window.print()} title={t('actions.print')?.toString()} />
}

export default memo(PrintButton)
