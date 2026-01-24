import React from 'react'
import { Book, Star, GitFork, Scale, CircleDot, GitPullRequest } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import TimeText from './TimeText'

interface GitHubRepoItemProps {
    title: string
    url: string
    isPublic?: boolean
    forkedFromUrl?: string
    description?: string
    siteDescription?: React.ReactNode
    siteBanner?: React.ReactNode
    tags?: string[]
    languages: { name: string; color: string }[]
    license?: string
    stars?: number
    forks?: number
    issues?: number
    pullRequests?: number
    lastUpdated: Date
}

const GitHubRepoItem: React.FC<GitHubRepoItemProps> = ({ title, url, forkedFromUrl, description, siteDescription, siteBanner, tags, languages, license, stars, forks, issues, pullRequests, lastUpdated }) => {
    const { t } = useLanguage()

    return (
        <div className='shadow-xl rounded-lg border-1 overflow-hidden print:border-0 print:shadow-none'>
            <div className='hidden print:block'>
                <a href={url} target='_blank' rel='noreferrer' className='font-bold'>
                    {url}
                </a>
            </div>
            {siteBanner && <div className='relative rounded-t-lg overflow-hidden print:hidden bg-[#000] h-40'>{siteBanner}</div>}
            <div className='py-6 bg-github font-sans p-5 print:hidden'>
                <div className='flex flex-col gap-1'>
                    {/* Title and Badge Row */}
                    <div className='flex items-center gap-2 flex-wrap'>
                        <Book size={16} />
                        <a href={url} target='_blank' className='text-[#58a6ff] text-xl font-semibold hover:underline break-all' rel='noreferrer'>
                            {title}
                        </a>
                        <span className='px-2 py-0.5 text-xs font-medium border rounded-full'>{t('projectsCard.git.public') || 'Public'}</span>
                    </div>

                    {/* Fork Information */}
                    {forkedFromUrl && (
                        <p className='text-xs mt-[-4px]'>
                            Forked from{' '}
                            <a href={forkedFromUrl} className='hover:underline' rel='noreferrer'>
                                {forkedFromUrl.split('/').slice(-2).join('/')}
                            </a>
                        </p>
                    )}

                    {/* Description */}
                    {description && <p className='mt-2 text-sm max-w-2xl'>{description}</p>}

                    {/* Topics/Tags */}
                    {tags && tags.length > 0 && (
                        <div className='flex flex-wrap gap-1 mt-2'>
                            {tags.map(tag => (
                                <a key={tag} href={`https://github.com/topics/${tag}`} className='px-2.5 py-0.5 text-xs font-medium bg-[#388bfd1a] hover:bg-[#1f6feb] hover:text-white rounded-full transition-colors'>
                                    {tag}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Metadata Row */}
                    <div className='flex flex-wrap items-center gap-4 mt-4 text-xs'>
                        {/* Languages */}
                        <div className='flex items-center gap-3'>
                            {languages.map(lang => (
                                <div key={lang.name} className='flex items-center gap-1'>
                                    <span className='w-3 h-3 rounded-full' style={{ backgroundColor: lang.color }} />
                                    <span>{lang.name}</span>
                                </div>
                            ))}
                        </div>

                        {stars && (
                            <div className='flex items-center gap-1'>
                                <Star size={14} />
                                <span>{stars.toLocaleString()}</span>
                            </div>
                        )}
                        {forks && (
                            <div className='flex items-center gap-1'>
                                <GitFork size={14} />
                                <span>{forks.toLocaleString()}</span>
                            </div>
                        )}
                        {issues && (
                            <div className='flex items-center gap-1'>
                                <CircleDot size={14} />
                                <span>{issues.toLocaleString()}</span>
                            </div>
                        )}
                        {pullRequests && (
                            <div className='flex items-center gap-1'>
                                <GitPullRequest size={14} />
                                <span>{pullRequests.toLocaleString()}</span>
                            </div>
                        )}
                        {license && (
                            <div className='flex items-center gap-1'>
                                <Scale size={14} />
                                <span>{license}</span>
                            </div>
                        )}
                        <span>
                            {t('projectsCard.git.updatedOn')}
                            <span> </span>
                            <TimeText
                                time={lastUpdated}
                                options={{
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                }}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className='p-5 rounded-b-lg mb-5 print:p-0 print:mb-0'>{siteDescription}</div>
        </div>
    )
}

export default GitHubRepoItem
