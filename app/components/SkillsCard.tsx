'use client'

import Image from 'next/image'
import { useLanguage } from '../contexts/LanguageContext'
import { GithubIcon } from './icons'
import BrandCard from './BrandCard'

export default function ProfileCard() {
    const { t } = useLanguage()

    return (
        <section id='skills' className='flex flex-col mb-10 break-inside-avoid'>
            <div className='mt-5'>
                <h2 className='text-3xl font-bold min-h-10'>{t('skillsCard.header')}</h2>
            </div>
            <ul>
                <li className='section'>{t('skillsCard.groups.cloudInfrastructure')}</li>
                <BrandCard title='Google Cloud' href='https://cloud.google.com/' foreground='#fff' background='#1A73E8' icon={<Image src='brands/cloud.google.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='AWS' href='https://aws.amazon.com/' foreground='#fff' background='#232F3E' icon={<Image src='brands/aws.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Azure' href='https://azure.microsoft.com/' foreground='#fff' background='#0078d4' icon={<Image src='brands/azure.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Terraform' href='https://developer.hashicorp.com/terraform' foreground='#fff' background='#2B1557' icon={<Image src='brands/terraform.svg' alt='' width={40} height={40} />} />
                <BrandCard title='K8s' href='https://kubernetes.io/' foreground='#fff' background='#326CE5' icon={<Image src='brands/kubernetes.io.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Docker' href='https://www.docker.com/' foreground='#fff' background='#0DB7ED' icon={<Image src='brands/docker.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='GitHub Actions' href='https://github.com/features/actions' foreground='#fff' background='#2088FF' icon={<GithubIcon />} />
                <BrandCard title='GitLab CI' href='https://about.gitlab.com/' foreground='#fff' background='#FC6D26' icon={<Image src='brands/gitlab.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Ansible' href='https://www.ansible.com/' foreground='#fff' background='#111111' icon={<Image src='brands/ansible.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Vagrant' href='https://developer.hashicorp.com/vagrant' foreground='#fff' background='#1563FF' icon={<Image src='brands/vagrant.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Nix' href='https://nixos.org/' foreground='#fff' background='#1A2B34' icon={<Image src='brands/nix.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Heroku' href='https://www.heroku.com/' foreground='#fff' background='#430098' icon={<Image src='brands/heroku.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Vercel' href='https://vercel.com/' foreground='#fff' background='#111827' icon={<Image src='brands/vercel.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Cloudflare' href='https://www.cloudflare.com/' foreground='#fff' background='#000' icon={<Image src='brands/cloudflare.webp' alt='' width={40} height={40} />} />

                <li className='section-divider'></li>
                <li className='section'>{t('skillsCard.groups.backendDatabases')}</li>
                <BrandCard title='Node' href='https://nodejs.org/' foreground='#fff' background='#0d121c' icon={<Image src='brands/nodejs.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Go' href='https://go.dev/' foreground='#fff' background='#00ADD8' icon={<Image src='brands/go.dev.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Python' href='https://www.python.org/' foreground='#fff' background='#3776AB' icon={<Image src='brands/python.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Rust' href='https://rust-lang.org/' foreground='#000' background='#DEA584' icon={<Image src='brands/rust-lang.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Java' href='https://www.java.com/' foreground='#000' background='#F89820' icon={<Image src='brands/java.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='PHP' href='https://www.php.net/' foreground='#fff' background='#777BB4' icon={<Image src='brands/www.php.net.webp' alt='' width={40} height={40} />} />
                <BrandCard title='LUA' href='https://www.lua.org/' foreground='#fff' background='#1A3FA2' icon={<Image src='brands/lua.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='PostgreSQL' href='https://www.postgresql.org/' foreground='#fff' background='#336791' icon={<Image src='brands/postgresql.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='MySQL' href='https://www.mysql.com/' foreground='#fff' background='#005E8A' icon={<Image src='brands/mysql.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Redis' href='https://redis.io/' foreground='#fff' background='#D82C20' icon={<Image src='brands/redis.io.webp' alt='' width={40} height={40} />} />
                <BrandCard title='MongoDB' href='https://www.mongodb.com/' foreground='#fff' background='#13AA52' icon={<Image src='brands/mongodb.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='GraphQL' href='https://graphql.org/' foreground='#fff' background='#2B0838' icon={<Image src='brands/graphql.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Nginx' href='https://nginx.org/' foreground='#fff' background='#000' icon={<Image src='brands/nginx.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Apache' href='https://httpd.apache.org/' foreground='#fff' background='#111827' icon={<Image src='brands/apache.webp' alt='' width={40} height={40} />} />
                <BrandCard title='HAProxy' href='https://www.haproxy.org/' foreground='#fff' background='#1A2B34' icon={<Image src='brands/haproxy.webp' alt='' width={40} height={40} />} />

                <li className='section-divider'></li>
                <li className='section'>{t('skillsCard.groups.frontendDesign')}</li>
                <BrandCard title='React' href='https://react.dev/' foreground='#fff' background='#1B1F23' icon={<Image src='brands/react.dev.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Next.js' href='https://nextjs.org/' foreground='#fff' background='#111827' icon={<Image src='brands/nextjs.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Vue' href='https://vuejs.org/' foreground='#fff' background='#0D1B1E' icon={<Image src='brands/vue.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Electron' href='https://www.electronjs.org/' foreground='#fff' background='#0F172A' icon={<Image src='brands/electronjs.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='TypeScript' href='https://www.typescriptlang.org/' foreground='#fff' background='#0F2B5B' icon={<Image src='brands/typescriptlang.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='JavaScript' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' foreground='#fff' background='#111827' icon={<Image src='brands/javascript.webp' alt='' width={40} height={40} />} />
                <BrandCard title='HTML5' href='https://developer.mozilla.org/en-US/docs/Web/HTML' foreground='#fff' background='#E34F26' icon={<Image src='brands/html.webp' alt='' width={40} height={40} />} />
                <BrandCard title='CSS' href='https://developer.mozilla.org/en-US/docs/Web/CSS' foreground='#fff' background='#1572B6' icon={<Image src='brands/css.webp' alt='' width={40} height={40} />} />
                <BrandCard title='SCSS' href='https://sass-lang.com/' foreground='#fff' background='#CC6699' icon={<Image src='brands/sass-lang.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='LESS' href='https://lesscss.org/' foreground='#fff' background='#111827' icon={<Image src='brands/less.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Tailwind CSS' href='https://tailwindcss.com/' foreground='#fff' background='#035e6e' icon={<Image src='brands/tailwindcss.webp' alt='' width={40} height={40} />} />
                <BrandCard title='WCAG' href='https://www.w3.org/WAI/standards-guidelines/wcag/' foreground='#fff' background='#005A9C' icon={<Image src='brands/wcag.webp' alt='' width={40} height={40} />} />

                <li className='section-divider'></li>
                <li className='section'>{t('skillsCard.groups.toolingDevelopment')}</li>
                <BrandCard title='Linux' href='https://kernel.org/' foreground='#fff' background='#000' icon={<Image src='brands/linux.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Bash' href='https://www.gnu.org/software/bash/' foreground='#fff' background='#4EAA25' icon={<Image src='brands/bash.webp' alt='' width={40} height={40} />} />
                <BrandCard title='npm' href='https://www.npmjs.com/' foreground='#fff' background='#CB3837' icon={<Image src='brands/npm.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Yarn' href='https://yarnpkg.com/' foreground='#fff' background='#1F2937' icon={<Image src='brands/yarn.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Turborepo' href='https://turborepo.org/' foreground='#000' background='#fff' icon={<Image src='brands/turborepo.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Webpack' href='https://webpack.js.org/' foreground='#fff' background='#1C78C0' icon={<Image src='brands/webpack.js.org.webp' alt='' width={40} height={40} />} />
                <BrandCard title='ESLint' href='https://eslint.org/' foreground='#fff' background='#0B1F32' icon={<Image src='brands/eslint.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Prettier' href='https://prettier.io/' foreground='#fff' background='#1A2B34' icon={<Image src='brands/prettier.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Husky' href='https://typicode.github.io/husky/' foreground='#fff' background='#1F2937' icon={<Image src='brands/husky.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Grafana' href='https://grafana.com/' foreground='#fff' background='#0B1F32' icon={<Image src='brands/grafana.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='New Relic' href='https://newrelic.com/' foreground='#fff' background='#107c5f' icon={<Image src='brands/newrelic.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Selenium' href='https://www.selenium.dev/' foreground='#fff' background='#2d5724' icon={<Image src='brands/selenium.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Ollama' href='https://ollama.com/' foreground='#000' background='#fff' icon={<Image src='brands/ollama.webp' alt='' width={40} height={40} />} />

                <li className='section-divider'></li>
                <li className='section'>{t('skillsCard.groups.cmsContentSystems')}</li>
                <BrandCard title='WordPress' href='https://wordpress.org/' foreground='#fff' background='#21759B' icon={<Image src='brands/wordpress.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Contentful' href='https://www.contentful.com/' foreground='#000' background='#fff' icon={<Image src='brands/contentful.com.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Strapi' href='https://strapi.io/' foreground='#fff' background='#302eab' icon={<Image src='brands/strapi.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Laravel' href='https://laravel.com/' foreground='#fff' background='#000' icon={<Image src='brands/laravel.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Symfony' href='https://symfony.com/' foreground='#fff' background='#000' icon={<Image src='brands/symfony.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Blade' href='https://laravel.com/docs/blade' foreground='#fff' background='#000' icon={<Image src='brands/laravel.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Twig' href='https://twig.symfony.com/' foreground='#fff' background='#436b19' icon={<Image src='brands/twig.webp' alt='' width={40} height={40} />} />
                <BrandCard title='Dust.js' href='https://github.com/linkedin/dustjs' foreground='#fff' background='#0A66C2' icon={<Image src='brands/dustjs.webp' alt='' width={40} height={40} />} />

                <li className='section-divider'></li>
                <li className='section hidden print:flex'>{t('skillsCard.groups.conceptsMethodologies')}</li>
                <li className='hidden print:flex'>Scrum</li>
                <li className='hidden print:flex'>Agile</li>
                <li className='hidden print:flex'>Git</li>
                <li className='hidden print:flex'>CI/CD</li>
                <li className='hidden print:flex'>Monorepo</li>
                <li className='hidden print:flex'>REST</li>
                <li className='hidden print:flex'>Microservices</li>
                <li className='hidden print:flex'>Serverless</li>
                <li className='hidden print:flex'>OAuth</li>
                <li className='hidden print:flex'>OIDC</li>
                <li className='hidden print:flex'>SAML</li>
                <li className='hidden print:flex'>XML</li>
                <li className='hidden print:flex'>Web3</li>
                <li className='hidden print:flex'>WebSockets</li>
                <li className='hidden print:flex'>WebRTC</li>
                <li className='hidden print:flex'>WebAssembly</li>
            </ul>
        </section>
    )
}
