'use client'

import ThemeToggle from './components/ThemeToggle'
import LanguageToggle from './components/LanguageToggle'
import PrintButton from './components/PrintButton'
import ProfileCard from './components/ProfileCard'
import SkillsCard from './components/SkillsCard'
import HistoryCard from './components/HistoryCard'
import ProjectsCard from './components/ProjectsCard'
import ShareButton from './components/ShareButton'

export default function Home() {
    return (
        <div className='min-h-full'>
            <header className='print:hidden z-40 flex flex-col md:flex-row justify-end fixed top-2 right-2 gap-4 md:gap-2'>
                <LanguageToggle />
                <ThemeToggle />
                <div className='flex flex-col md:hidden gap-4'>
                    <ShareButton />
                    <PrintButton />
                </div>
            </header>

            <main className='block h-full sm:pt-20 md:pt-40 pb-40 pl-10 pr-10 md:pl-40 md:pr-40 print:pb-0 print:pt-5 print:px-0 md:gap-2'>
                <div className='flex flex-col h-full items-center justify-center'>
                    <div className='flex flex-col max-w-full md:max-w-160 w-full'>
                        <ProfileCard />
                        <SkillsCard />
                        <HistoryCard />
                        <ProjectsCard />
                    </div>
                </div>
            </main>

            <footer className='hidden md:flex print:hidden justify-end fixed bottom-4 right-4 gap-2'>
                <ShareButton />
                <PrintButton />
            </footer>
        </div>
    )
}
