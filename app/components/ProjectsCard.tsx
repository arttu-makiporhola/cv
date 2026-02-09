import { useLanguage } from '../contexts/LanguageContext'
import GitHubRepoItem from './GithubRepoItem'
import HoverVideo from './HoverVideo'

export default function ProjectsCard() {
    const { t } = useLanguage()

    return (
        <section className='flex flex-col'>
            <div className='break-inside-avoid'>
                <h2 className='text-3xl font-bold mb-5 min-h-10'>{t('projectsCard.title')}</h2>
                <p className='min-h-20 print:min-h-auto print:mb-5'>{t('projectsCard.description')}</p>
            </div>
            <div className='flex flex-col mt-10 print:mt-0 gap-10'>
                <div className='print:border-b-1 break-inside-avoid'>
                    <GitHubRepoItem
                        lastUpdated={new Date('Jan 24, 2025')}
                        title='arttu-makiporhola/podcast-auto-clean-cli'
                        url='https://github.com/arttu-makiporhola/podcast-auto-clean-cli'
                        license='MIT License'
                        languages={[
                            {
                                name: 'JavaScript',
                                color: '#f1e05a',
                            },
                        ]}
                        siteDescription={<div className='min-h-30 print:min-h-auto print:mb-5'>{t('projectsCard.projectRepos.podcastAutoCleanCli.siteDescription')}</div>}
                    />
                </div>
                <div className='print:border-b-1 break-inside-avoid'>
                    <GitHubRepoItem
                        lastUpdated={new Date('Jan 24, 2025')}
                        title='arttu-makiporhola/game'
                        url='https://github.com/arttu-makiporhola/game'
                        license='MIT License'
                        languages={[
                            {
                                name: 'Rust',
                                color: '#dea584',
                            },
                        ]}
                        siteDescription={<div className='min-h-20 print:min-h-auto print:mb-5'>{t('projectsCard.projectRepos.game.siteDescription')}</div>}
                        siteBanner={<HoverVideo posterSrc='game-banner-frame-0.webp' videoSrc='game-banner.webm' alt='Game Banner' className='h-full' />}
                    />
                </div>
                <div className='print:border-b-1 break-inside-avoid'>
                    <GitHubRepoItem
                        lastUpdated={new Date('Oct 3, 2023')}
                        title='devgeniem/dustpress-debugger'
                        url='https://github.com/devgeniem/dustpress-debugger/commits?author=godbone'
                        license='GPL-3.0'
                        stars={3}
                        forks={6}
                        issues={5}
                        pullRequests={5}
                        languages={[
                            {
                                name: 'JavaScript',
                                color: '#f1e05a',
                            },
                        ]}
                        siteDescription={<div className='min-h-20 print:min-h-auto print:mb-5'>{t('projectsCard.projectRepos.dustpressDebugger.siteDescription')}</div>}
                    />
                </div>
                <div className='break-inside-avoid'>
                    <GitHubRepoItem
                        lastUpdated={new Date(process.env.NEXT_PUBLIC_BUILD_TIME || '')}
                        title='arttu-makiporhola/cv'
                        url='https://github.com/arttu-makiporhola/cv'
                        license='MIT License'
                        languages={[
                            {
                                name: 'TypeScript',
                                color: '#3178c6',
                            },
                        ]}
                        siteDescription={<div className='min-h-20 print:min-h-auto'>{t('projectsCard.projectRepos.cv.siteDescription')}</div>}
                    />
                </div>
            </div>
        </section>
    )
}
