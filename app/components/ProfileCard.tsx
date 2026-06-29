'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import SparkViewerLoader from './SparkViewerLoader'
import { LinkedinIcon, GithubIcon, MailIcon } from './icons'

export default function ProfileCard() {
    const { t } = useLanguage()

    return (
        <section id='profile' className='flex flex-col break-inside-avoid'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex mb-5 md:mb-0 justify-between flex-wrap items-end md:order-2 md:justify-start md:items-start md:flex-col'>
                    <div className='relative mb-5 w-full h-80 sm:h-100 max-w-full md:max-w-none md:max-w-unset sm:-mt-30 sm:w-80 sm:-mr-50 sm:-mb-10 md:-ml-10 overflow-hidden z-5'>
                        <div className='h-full w-full max-w-full md:max-w-none md:max-w-unset overflow-hidden'>
                            <SparkViewerLoader splatUrl='portrait.spz' scale={4} className='scale-150 sm:scale-none sm:mt-5 md:mt-0 cursor-pointer'>
                                <Image src='portrait.webp' alt='Portrait placeholder' priority width={600} height={600} className='block print:hidden sm:p-15 scale-115 sm:scale-130 mt-10 sm:-mt-10 print:mt-0 md:print:pb-20 pb-10 ml-2 h-full w-full object-contain object-bottom' />
                                <Image src='photo.webp' alt='Portrait photo' width={2372} height={2542} className='opacity-0 pointer-events-none print:opacity-100 sm:p-15 scale-120 -mt-10 print:mt-0 md:print:pb-20 ml-2 h-full w-full object-contain object-bottom' />
                            </SparkViewerLoader>
                        </div>
                    </div>
                    <div className='flex flex-col z-10 ml-2'>
                        <div className='flex items-center mb-2 mr-2'>
                            <p className='font-bold'>Arttu Mäkipörhölä</p>
                        </div>
                        <a href='mailto:cv@a-m.fi' className='flex items-center mb-2 mr-2'>
                            <div className='mr-1 w-5 h-5 text-color-foreground'>
                                <MailIcon />
                            </div>
                            <p>cv@a-m.fi</p>
                        </a>
                        <a href='https://www.linkedin.com/in/arttu-m/' target='_blank' rel='noreferrer' className='flex items-center mb-2 mr-2'>
                            <div className='mr-1 w-5 h-5'>
                                <LinkedinIcon />
                            </div>
                            <p>linkedin.com/in/arttu-m</p>
                        </a>
                        <a href='https://github.com/arttu-makiporhola' target='_blank' rel='noreferrer' className='flex items-center mb-2 mr-2'>
                            <div className='mr-1 w-5 h-5 text-color-foreground'>
                                <GithubIcon />
                            </div>
                            <p>github.com/arttu-makiporhola</p>
                        </a>
                    </div>
                </div>
                <div className='flex flex-1 flex-col z-10 relative md:mr-2 min-h-60 sm:min-h-40 md:min-h-0 print:min-h-0'>{t('profileCard.text')}</div>
            </div>
        </section>
    )
}
