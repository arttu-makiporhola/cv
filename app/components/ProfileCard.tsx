'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import SparkViewerLoader from './SparkViewerLoader'
import { LinkedinIcon, GithubIcon, MailIcon } from './icons'
import BrandCard from './BrandCard'

export default function ProfileCard() {
    const { t } = useLanguage()

    return (
        <section className='flex flex-col mb-10 break-inside-avoid'>
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
            <div className='mt-5'>
                <p className='font-bold min-h-6'>{t('profileCard.footer')}</p>
            </div>
            <div className='flex flex-wrap gap-2 print:gap-0'>
                <BrandCard title='Google Cloud' href='https://cloud.google.com/' foreground='#fff' background='#1A73E8' icon={<Image title='Google Cloud logo' src='brands/cloud.google.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='AWS' href='https://aws.amazon.com/' foreground='#fff' background='#232F3E' icon={<Image title='AWS logo' src='brands/aws.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Terraform' href='https://developer.hashicorp.com/terraform' foreground='#fff' background='#2B1557' icon={<Image title='Terraform logo' src='brands/terraform.svg' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Docker' href='https://www.docker.com/' foreground='#fff' background='#0DB7ED' icon={<Image title='Docker logo' src='brands/docker.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='K8s' href='https://kubernetes.io/' foreground='#fff' background='#326CE5' icon={<Image title='K8s logo' src='brands/kubernetes.io.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='GitHub Actions' href='https://github.com/features/actions' foreground='#fff' background='#2088FF' icon={<GithubIcon />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Ansible' href='https://www.ansible.com/' foreground='#fff' background='#111111' icon={<Image title='Ansible logo' src='brands/ansible.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='WordPress' href='https://wordpress.org/' foreground='#fff' background='#21759B' icon={<Image title='WordPress logo' src='brands/wordpress.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Contentful' href='https://www.contentful.com/' foreground='#000' background='#ffffff' icon={<Image title='Contentful logo' src='brands/contentful.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='PostgreSQL' href='https://www.postgresql.org/' foreground='#fff' background='#336791' icon={<Image title='PostgreSQL logo' src='brands/postgresql.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='MySQL' href='https://www.mysql.com/' foreground='#fff' background='#005E8A' icon={<Image title='MySQL logo' src='brands/mysql.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='MongoDB' href='https://www.mongodb.com/' foreground='#fff' background='#13AA52' icon={<Image title='MongoDB logo' src='brands/mongodb.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='GraphQL' href='https://graphql.org/' foreground='#fff' background='#2B0838' icon={<Image title='GraphQL logo' src='brands/graphql.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Redis' href='https://redis.io/' foreground='#fff' background='#D82C20' icon={<Image title='Redis logo' src='brands/redis.io.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Grafana' href='https://grafana.com/' foreground='#fff' background='#0B1F32' icon={<Image title='Grafana logo' src='brands/grafana.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Nginx' href='https://nginx.org/' foreground='#fff' background='#000000' icon={<Image title='Nginx logo' src='brands/nginx.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Node' href='https://nodejs.org/' foreground='#fff' background='#0d121c' icon={<Image title='Node logo' src='brands/nodejs.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='React' href='https://react.dev/' foreground='#fff' background='#1B1F23' icon={<Image title='React logo' src='brands/react.dev.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Next.js' href='https://nextjs.org/' foreground='#fff' background='#111827' icon={<Image title='Next.js logo' src='brands/nextjs.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Vue' href='https://vuejs.org/' foreground='#fff' background='#0D1B1E' icon={<Image title='Vue logo' src='brands/vue.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Tailwind CSS' href='https://tailwindcss.com/' foreground='#fff' background='#0B1120' icon={<Image title='Tailwind CSS logo' src='brands/tailwindcss.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Electron' href='https://www.electronjs.org/' foreground='#fff' background='#0F172A' icon={<Image title='Electron logo' src='brands/electronjs.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Webpack' href='https://webpack.js.org/' foreground='#fff' background='#1C78C0' icon={<Image title='Webpack logo' src='brands/webpack.js.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Rust' href='https://rust-lang.org/' foreground='#000' background='#DEA584' icon={<Image title='Rust logo' src='brands/rust-lang.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='TypeScript' href='https://www.typescriptlang.org/' foreground='#fff' background='#0F2B5B' icon={<Image title='TypeScript logo' src='brands/typescriptlang.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Go' href='https://go.dev/' foreground='#fff' background='#00ADD8' icon={<Image title='Go logo' src='brands/go.dev.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='PHP' href='https://www.php.net/' foreground='#fff' background='#777BB4' icon={<Image title='PHP logo' src='brands/www.php.net.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Python' href='https://www.python.org/' foreground='#fff' background='#3776AB' icon={<Image title='Python logo' src='brands/python.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='Java' href='https://www.java.com/' foreground='#000' background='#F89820' icon={<Image title='Java logo' src='brands/java.com.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
                <BrandCard title='LUA' href='https://www.lua.org/' foreground='#fff' background='#1A3FA2' icon={<Image title='LUA logo' src='brands/lua.org.webp' alt='' width={40} height={40} />} />
                <span className='hidden print:inline mr-1'>, </span>
            </div>
        </section>
    )
}
