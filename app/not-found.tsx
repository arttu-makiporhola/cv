import Link from 'next/link'
import { siteConfig } from './lib/config'
import ThemeToggle from './components/ThemeToggle'

export default function NotFound() {
    return (
        <div>
            <header className='z-40 flex flex-col md:flex-row justify-end fixed top-2 right-2 gap-4 md:gap-2'>
                <ThemeToggle />
            </header>

            <main className='flex flex-col items-center justify-center min-h-screen'>
                <h1 className='text-[5rem] font-bold'>404</h1>
                <Link href={siteConfig.baseUrl}>{siteConfig.baseUrl}</Link>
            </main>
        </div>
    )
}
