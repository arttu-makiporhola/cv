import ShowMore from '../components/ShowMore'

export type Language = 'en' | 'fi'

export type Translations = {
    [key: string]: string | React.ReactNode | Translations
}

export const translations: Record<Language, Translations> = {
    en: {
        actions: {
            toggleTheme: 'Toggle theme',
            switchToFinnish: 'Vaihda suomeksi',
            print: 'Print / Save as PDF',
            share: 'Share',
        },
        components: {
            ShowMore: {
                showMore: 'Show more...',
                showLess: 'Show less',
            },
        },
        profileCard: {
            text: (
                <div>
                    <h1 className='text-4xl font-bold'>Hi</h1>
                    <p>I'm a long-time (10-y) Full-stack developer. Nowadays, I'm more on the DevOps & infra side.</p>
                    <br />
                    <p>The thing I enjoy most, is integrating many systems to work together seamlessly. I'd compare it to fitting together a puzzle where you sometimes have to fix a couple pieces.</p>
                    <br />
                    <p>I've been told that I'm very "smooth" to work with, my aim is always to make everything "simpler" for everyone involved, so that made me quite glad.</p>
                </div>
            ),
        },
        skillsCard: {
            header: 'Skills',
            groups: {
                cloudInfrastructure: 'Cloud & Infrastructure',
                backendDatabases: 'Backend & Databases',
                frontendDesign: 'Frontend & Design',
                toolingDevelopment: 'Tooling & Development',
                cmsContentSystems: 'CMS & Content Systems',
                conceptsMethodologies: 'Concepts & Methodologies',
            },
        },
        historyCard: {
            title: 'History',
            present: 'Present',
            hionDigital: (
                <div>
                    <ul className='list-disc pl-5'>
                        <li>
                            <b>Cloud Architecture & Infrastructure as Code (IaC)</b>: Co-designed and solely managed the AWS infrastructure for SOK across 5 projects and ~30 regional cooperative store sites, utilizing stelligent/mu for CloudFormation deployment. Designed a new GCP architecture using Terraform (Cloud Run, Cloud SQL, Memorystore/Redis) to replace manual processes.
                        </li>
                        <li>
                            <b>Massive Infrastructure Provisioning</b>: Architected and provisioned Google Cloud infrastructures for numerous prominent Finnish organizations, including R-Kioski (ärrä.fi), Finnish Red Cross Blood Service (veripalvelu.fi), Uniarts (uniarts.fi), SDP (sdp.fi), Vesivek (vesivek.fi), Laatumaa (laatumaa.fi), and several city/municipal portals (Vaasa, Kokkola, Lahti Museums).
                        </li>
                        <li>
                            <b>Headless CMS & Large-Scale Migrations</b>: Executed a complex migration of over 30 SOK sites into Contentful, engineering a custom parsing solution to transform and retain all original HTML styling within the new Contentful schema. Managed the AWS infrastructure for headless applications utilizing React frontends paired with GraphQL-powered WordPress backends.
                        </li>
                        <li>
                            <b>Technical Leadership & Mentoring</b>: Acted as Lead Developer and Architect for multiple projects, including yhkodit.fi, driving technical planning, code-level execution, and developer mentoring. Mentored peers on cloud setups (e.g., Suomen Yrittäjät).
                        </li>
                        <li>
                            <b>Performance Optimization & Security</b>: Spearheaded company-wide security best practices. Routinely debugged and optimized backend performance utilizing Xdebug and Webgrind/Cachegrind.
                        </li>
                        <li>
                            <b>Modern WordPress & Backend Features</b>: Built fully custom WordPress applications using Blade themes and DustPress. Implemented advanced search capabilities using RediSearch and maintained internal core plugins.
                        </li>
                        <li>
                            <b>Advanced Integrations & SSO</b>: Architected automated data synchronization pipelines bridging WordPress with external CRMs, ERPs, and APIs. Engineered complex Single Sign-On (SSO) authentication flows integrating Azure and GCP with Keycloak.
                        </li>
                        <li>
                            <b>AI-Assisted Developer Productivity</b>: Championed the adoption of LLM-assisted engineering workflows for debugging, code generation and code review. Advocated for and helped establish self-hosted local LLM infrastructure for internal use, significantly reducing API costs.
                        </li>
                    </ul>
                    <p className='text-stone-500 mt-5 text-xs'>
                        * Geniem Oy was acquired by{' '}
                        <a href='https://www.saaripartners.fi' target='_blank' rel='noreferrer'>
                            Saari Partners Oy
                        </a>
                        , and later rebranded as Hion Digital Oy
                    </p>
                </div>
            ),
            geniem: (
                <ul className='list-disc pl-5 mb-5'>
                    <li>
                        <b>Infrastructure & Monorepo Management</b>: Co-led DigitalOcean infrastructure management and custom Docker image development company-wide. Solely managed a Kubernetes environment for the salibandyliiga.fi and salibandyliitto.fi monorepo, and managed the tuni.fi monorepo deploying 5 distinct multisite projects from a single shared codebase.
                    </li>
                    <li>
                        <b>Automated Testing & Alerting Pipelines</b>: Implemented automated monitoring for critical features using Pingdom, Selenium & Testingbot, configuring custom Slack webhooks for detailed error telemetry. Built automated End-to-End (E2E) testing pipelines that captured test execution videos, recorded precise failure timestamps, and triggered rich Slack alerts.
                    </li>
                    <li>
                        <b>Complex API & Payment Integrations</b>: Built robust API integrations from scratch without relying on off-the-shelf plugins, including native OAuth implementations for social media (Facebook, Instagram, Twitter).
                    </li>
                    <li>
                        <b>E-Commerce Booking Systems</b>: Delivered a comprehensive e-commerce system for vierumaki.fi integrated with the Verifone API, featuring custom recurring payment functionalities.
                    </li>
                    <li>
                        <b>Local Development & Containerization</b>: Owned internal Linux compatibility and local development tooling. Built customized Docker/Docker Compose environments containing Nginx (with PageSpeed) and PHP-FPM in a single container, alongside a custom local HTTPS management tool.
                    </li>
                    <li>
                        <b>Full-Stack & Diverse Environments</b>: Contributed frontend UI features to the Buildie (React & TypeScript) application and built Vue.js Single Page Applications (SPAs). Managed legacy environments using Heroku and Vagrant, and utilized MongoDB for backend data management.
                    </li>
                </ul>
            ),
        },
        projectsCard: {
            title: 'Projects',
            description: "Because I've spent the last 10 years building enterprise systems, most of my actual codebase is in private repositories. However, I actively build personal projects to explore new languages (like Rust), test local LLM setups, and solve my own daily workflow problems. Here are a few  repositories that highlight what I enjoy building off the clock.",
            git: {
                public: 'Public',
                updatedOn: 'Updated on',
            },
            projectRepos: {
                podcastAutoCleanCli: {
                    siteDescription: (
                        <p>
                            I made this project for personal use as i had some video content i wanted to generate subtitles for per speaker, auto-clean audio via ai, and auto-cut based on silence, resulting finally into a{' '}
                            <a href='https://kdenlive.org/' target='_blank' rel='noreferrer'>
                                kdenlive
                            </a>{' '}
                            project file that would allow you to just delete unnecessary sections in premade blocks, and then just export without any more work. All ai selections i made were based on active use, "foreseeable support", if is open source, and could be ran locally via docker.
                        </p>
                    ),
                },
                game: {
                    siteDescription: (
                        <div>
                            <p>
                                A very incomplete 3d physics platformer, written as a sort of learning project for using{' '}
                                <a href='https://rust-lang.org/' target='_blank' rel='noreferrer'>
                                    Rust
                                </a>{' '}
                                and{' '}
                                <a href='https://godotengine.org/' target='_blank' rel='noreferrer'>
                                    Godot
                                </a>{' '}
                                to make potentially high performance web games with open source tools.
                            </p>
                            <br />
                            <a href='https://godbone.gitlab.io/test' className='hidden print:block' target='_blank' rel='noreferrer'>
                                https://godbone.gitlab.io/test
                            </a>
                            <ShowMore>
                                <div>
                                    <a href='https://godbone.gitlab.io/test' className='break-all print:hidden' target='_blank' rel='noreferrer'>
                                        https://godbone.gitlab.io/test
                                    </a>
                                    <div className='print:hidden'>
                                        <p className='mb-0'>Pc:</p>
                                        <div className='flex flex-col xs:max-w-85'>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>WASD</div>
                                                <div className='pl-5'>Move</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Mouse/Arrow keys</div>
                                                <div className='pl-5'>Look around</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Space</div>
                                                <div className='pl-5'>Shrink/Jump</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>R</div>
                                                <div className='pl-5'>Reset position</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Esc</div>
                                                <div className='pl-5'>Show menu</div>
                                            </div>
                                        </div>
                                        <p className='mt-5'>Phone:</p>
                                        <div className='flex flex-col xs:max-w-85'>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Drag left side of screen</div>
                                                <div className='pl-5'>Move</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Drag right side of screen</div>
                                                <div className='pl-5'>Look around</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Tap & Hold Right side of screen</div>
                                                <div className='pl-5'>Shrink/Jump</div>
                                            </div>
                                        </div>

                                        <p className='mt-5 text-stone-500'>I'll probably continue the development at some point. (level & world design is hard)</p>
                                    </div>
                                </div>
                            </ShowMore>
                        </div>
                    ),
                },
                dustpressDebugger: {
                    siteDescription: (
                        <p>
                            "dustpress-debugger" was a WordPress plugin to add to sites running{' '}
                            <a href='https://github.com/devgeniem/dustpress' target='_blank' rel='noreferrer'>
                                dustpress
                            </a>{' '}
                            to debug model data and performance, we decided to move it into a browser extension shown in devtools instead to improve site performance and developer experience, and i did that as i had previous experience with developing minimal browser extensions for personal use.
                        </p>
                    ),
                },
                cv: {
                    siteDescription: (
                        <p>
                            This current site, e.g.{' '}
                            <a href='https://cv.a-m.fi' target='_blank' rel='noreferrer'>
                                https://cv.a-m.fi
                            </a>{' '}
                            This is a minimal simple online CV, its intended to be completely offline to minimize all possible costs, as such it's built via{' '}
                            <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
                                next.js
                            </a>
                            's static export and hosted publicly on GitHub Pages.
                        </p>
                    ),
                },
            },
        },
    },
    fi: {
        actions: {
            toggleTheme: 'Vaihda teemaa',
            switchToFinnish: 'Switch to english',
            print: 'Tulosta / Tallenna PDF:ksi',
            share: 'Jaa',
        },
        components: {
            ShowMore: {
                showMore: 'Näytä enemmän...',
                showLess: 'Näytä vähemmän',
            },
        },
        profileCard: {
            text: (
                <div>
                    <h1 className='text-4xl font-bold'>Moi</h1>
                    <p>Oon pitkän uran (10-v) Full-stack-kehittäjä. Nykyään enemmän DevOps- ja infra-puolella.</p>
                    <br />
                    <p>Eniten tykkään siitä, kun eri järjestelmät saadaan toimimaan saumattomasti yhdessä. Vertaisin sitä palapeliin jossa välillä joutuu fiksaan pari palaa.</p>
                    <br />
                    <p>Mulle on sanottu että mun kanssa on ollut todella "sujuva" työskennellä. Koitan aina tehdä kaikesta mahdollisimman "yksinkertaista" kaikille osapuolille, joten se teki mut aika tyytyväiseks.</p>
                </div>
            ),
        },
        skillsCard: {
            header: 'Taidot',
            groups: {
                cloudInfrastructure: 'Pilvipalvelut & infrastruktuuri',
                backendDatabases: 'Taustajärjestelmät & tietokannat',
                frontendDesign: 'Käyttöliittymät & suunnittelu',
                toolingDevelopment: 'Työkalut & ohjelmistokehitys',
                cmsContentSystems: 'Julkaisujärjestelmät & sisältöjärjestelmät',
                conceptsMethodologies: 'Käsitteet & menetelmät',
            },
        },
        historyCard: {
            title: 'Historia',
            present: 'Jatkuu',
            hionDigital: (
                <div>
                    <ul className='list-disc pl-5'>
                        <li>
                            <b>Pilviarkkitehtuuri & Infrastructure as Code (IaC)</b>: Suunnittelin yhdessä ja hallinnoin yksin SOK:n AWS-infrastruktuuria viidessä projektissa ja noin 30 alueellisen osuuskaupan sivustolla, hyödyntäen stelligent/mu:ta CloudFormation-julkaisuissa. Suunnittelin uuden GCP-arkkitehtuurin Terraformilla (Cloud Run, Cloud SQL, Memorystore/Redis) korvaamaan manuaalisia prosesseja.
                        </li>
                        <li>
                            <b>Laajamittainen infrastruktuurin provisiointi</b>: Toimin arkkitehtina ja provisioin Google Cloud -infrastruktuurit lukuisille merkittäville suomalaisille organisaatioille, mukaan lukien R-Kioski (ärrä.fi), Suomen Punaisen Ristin Veripalvelu (veripalvelu.fi), Taideyliopisto (uniarts.fi), SDP (sdp.fi), Vesivek (vesivek.fi), Laatumaa (laatumaa.fi) sekä useita kaupunkien ja kuntien portaaleja (Vaasa, Kokkola, Lahden museot).
                        </li>
                        <li>
                            <b>Headless CMS & laajamittaiset migraatiot</b>: Toteutin yli 30 SOK:n sivuston monimutkaisen migraation Contentfuliin. Kehitin räätälöidyn jäsennysratkaisun (parsing), joka muunsi ja säilytti kaikki alkuperäiset HTML-tyylit uudessa Contentful-skeemassa. Hallinnoin AWS-infrastruktuuria headless-sovelluksille, joissa hyödynnettiin React-käyttöliittymiä ja GraphQL-pohjaisia WordPress-taustajärjestelmiä.
                        </li>
                        <li>
                            <b>Tekninen johtaminen & mentorointi</b>: Toimin pääkehittäjänä ja arkkitehtina useissa projekteissa (mm. yhkodit.fi), johtaen teknistä suunnittelua, kooditason toteutusta ja kehittäjien mentorointia. Mentoroin kollegoita pilviympäristöjen pystytyksessä (esim. Suomen Yrittäjät).
                        </li>
                        <li>
                            <b>Suorituskyvyn optimointi & tietoturva</b>: Vedin yritystason tietoturvakäytäntöjen jalkauttamista. Tein rutiininomaisesti vianmääritystä ja optimoin taustajärjestelmien suorituskykyä hyödyntäen Xdebugia ja Webgrind/Cachegrindiä.
                        </li>
                        <li>
                            <b>Moderni WordPress & taustajärjestelmäominaisuudet</b>: Rakensin täysin räätälöityjä WordPress-sovelluksia hyödyntäen Blade-teemoja ja DustPressiä. Toteutin edistyneitä hakuominaisuuksia RediSearchin avulla ja ylläpidin yrityksen sisäisiä ydinlisäosia.
                        </li>
                        <li>
                            <b>Edistyneet integraatiot & SSO</b>: Suunnittelin automatisoituja tietojensynkronointiputkia, jotka yhdistivät WordPressin ulkoisiin CRM- ja ERP-järjestelmiin sekä API-rajapintoihin. Kehitin monimutkaisia Single Sign-On (SSO) -tunnistautumisvirtoja integroiden Azuren ja GCP:n Keycloakin kanssa.
                        </li>
                        <li>
                            <b>Tekoälyavusteinen kehittäjien tuottavuus</b>: Edistin kielimalleihin (LLM) perustuvien työnkulkujen käyttöönottoa vianmäärityksessä, koodin luonnissa ja koodikatselmoinnissa. Puhuin itseylläpidetyn (self-hosted) paikallisen LLM-infrastruktuurin puolesta ja autoin sen pystyttämisessä sisäiseen käyttöön. Tämä laskee merkittävästi API-kustannuksia.
                        </li>
                    </ul>
                    <p className='text-stone-500 mt-5 text-xs'>
                        * Geniem Oy siirtyi osaksi{' '}
                        <a href='https://www.saaripartners.fi' target='_blank' rel='noreferrer'>
                            Saari Partners Oy
                        </a>
                        :tä, ja myöhemmin rebrändättiin Hion Digital Oy:ksi
                    </p>
                </div>
            ),
            geniem: (
                <ul className='list-disc pl-5 mb-5'>
                    <li>
                        <b>Infrastruktuurin & monorepon hallinta</b>: Johdin yhdessä DigitalOcean-infrastruktuurin hallintaa ja räätälöityjen Docker-kuvien kehitystä koko yrityksessä. Hallinnoin yksin Kubernetes-ympäristöä salibandyliiga.fi- ja salibandyliitto.fi-monorepolle sekä ylläpidin tuni.fi-monorepoa, josta julkaistiin viisi erillistä multisite-projektia yhdestä jaetusta koodikannasta.
                    </li>
                    <li>
                        <b>Automatisoidut testaus- & hälytysputket</b>: Toteutin kriittisten ominaisuuksien automatisoidun valvonnan Pingdomilla, Seleniumilla ja Testingbotilla, konfiguroiden räätälöidyt Slack-webhookit yksityiskohtaista virhetelemetriaa varten. Rakensin automatisoituja End-to-End (E2E) -testausputkia, jotka tallensivat testien suorituksista videoita, kirjasivat tarkat epäonnistumisten aikaleimat ja laukaisivat monipuolisia Slack-hälytyksiä.
                    </li>
                    <li>
                        <b>Monimutkaiset API- & maksuintegraatiot</b>: Rakensin vankkoja API-integraatioita alusta alkaen ilman valmiita lisäosia, mukaan lukien natiivit OAuth-toteutukset sosiaaliseen mediaan (Facebook, Instagram, Twitter).
                    </li>
                    <li>
                        <b>Verkkokauppojen varausjärjestelmät</b>: Toimitin vierumaki.fi-sivustolle kattavan, Verifone API:in integroidun verkkokauppajärjestelmän, joka sisälsi räätälöityjä toiminnallisuuksia toistuviin maksuihin.
                    </li>
                    <li>
                        <b>Paikallinen kehitys & kontitus</b>: Vastasin sisäisestä Linux-yhteensopivuudesta ja paikallisista kehitystyökaluista. Rakensin räätälöityjä Docker/Docker Compose -ympäristöjä, jotka sisälsivät Nginxin (PageSpeedillä) ja PHP-FPM:n yhdessä kontissa, sekä räätälöidyn paikallisen HTTPS-hallintatyökalun.
                    </li>
                    <li>
                        <b>Full-Stack & moninaiset ympäristöt</b>: Osallistuin Buildie-sovelluksen (React & TypeScript) käyttöliittymäominaisuuksien kehittämiseen ja rakensin Vue.js Single Page -sovelluksia (SPA). Hallinnoin legacy-ympäristöjä Herokun ja Vagrantin avulla sekä hyödynsin MongoDB:tä taustajärjestelmän tiedonhallinnassa.
                    </li>
                </ul>
            ),
        },
        projectsCard: {
            title: 'Projektit',
            description: 'Koska olen viimeiset 10 vuotta rakentanut laajoja yritysjärjestelmiä, suurin osa varsinaisesta koodistani sijaitsee yksityisissä repositorioissa. Teen kuitenkin aktiivisesti omia projekteja, joiden avulla opiskelen uusia kieliä (kuten Rustia), testaan lokaaleja LLM-ympäristöjä ja ratkon omia arjen haasteitani. Tässä on muutama repositorio, jotka antavat hyvän kuvan siitä, millaisten asioiden parissa viihdyn vapaa-ajallani.',
            git: {
                public: 'Julkinen',
                updatedOn: 'Päivitetty',
            },
            projectRepos: {
                podcastAutoCleanCli: {
                    siteDescription: (
                        <p>
                            Tein tämän projektin omaan käyttöön, koska minulla oli jonkin verran videosisältöä jolle halusin generoida tekstitykset per puhuja, automaattisesti puhdistaa äänen ai:lla, ja automaattisesti leikata hiljaisuuksien perusteella, lopputuloksena tulisi{' '}
                            <a href='https://kdenlive.org/' target='_blank' rel='noreferrer'>
                                kdenlive
                            </a>{' '}
                            projektitiedosto, joka mahdollisti turhien osioiden poistamisen valmiiksi tehdyissä lohkoissa, ja sitten vain renderöi ilman muuta lisätyötä. Kaikki ai valinnat perustin aktiiviseen käyttöön, "ennakoitavissa olevaan tukeen", avoimeen lähdekoodiin, ja siihen että sitä voi ajaa paikallisesti dockerin kautta.
                        </p>
                    ),
                },
                game: {
                    siteDescription: (
                        <div>
                            <p>
                                Erittäin keskeneräinen 3D-fysiikkaplatformeri, kirjoitettu periaatteessa oppimisprojektina käyttäen{' '}
                                <a href='https://rust-lang.org/' target='_blank' rel='noreferrer'>
                                    Rustia
                                </a>{' '}
                                ja{' '}
                                <a href='https://godotengine.org/' target='_blank' rel='noreferrer'>
                                    Godotia
                                </a>{' '}
                                tavoitteena tehdä suorituskykyisiä web-pelejä avoimilla työkaluilla.
                            </p>
                            <br />
                            <a href='https://godbone.gitlab.io/test' className='hidden print:block' target='_blank' rel='noreferrer'>
                                https://godbone.gitlab.io/test
                            </a>
                            <ShowMore>
                                <div>
                                    <a href='https://godbone.gitlab.io/test' className='break-all print:hidden' target='_blank' rel='noreferrer'>
                                        https://godbone.gitlab.io/test
                                    </a>
                                    <div className='print:hidden'>
                                        <p className='mb-0'>Pc:</p>
                                        <div className='flex flex-col xs:max-w-85'>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>WASD</div>
                                                <div className='pl-5'>Liiku</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Hiiri/Nuolinäppäimet</div>
                                                <div className='pl-5'>Katso ympärille</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Välilyönti</div>
                                                <div className='pl-5'>Pienenny/Hyppää</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>R</div>
                                                <div className='pl-5'>Siirry alkuun</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Esc</div>
                                                <div className='pl-5'>Näytä valikko</div>
                                            </div>
                                        </div>
                                        <p className='mt-5'>Puhelin:</p>
                                        <div className='flex flex-col xs:max-w-85'>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Pyyhkäise vasenta puolta</div>
                                                <div className='pl-5'>Liiku</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Pyyhkäise oikeaa puolta</div>
                                                <div className='pl-5'>Katso ympäri</div>
                                            </div>
                                            <div className='flex flex-col xs:flex-row border-b-1'>
                                                <div className='flex-1'>Napauta & pidä oikeaa puolta</div>
                                                <div className='pl-5'>Pienennä/Hyppää</div>
                                            </div>
                                        </div>

                                        <p className='mt-5 text-stone-500'>Jatkan tän kehitystä todennäkösesti vielä joskus. (tasojen & maailman suunnittelu on vaikeeta)</p>
                                    </div>
                                </div>
                            </ShowMore>
                        </div>
                    ),
                },
                dustpressDebugger: {
                    siteDescription: (
                        <p>
                            "dustpress-debugger" oli WordPress lisäosa, jonka tarkoitus oli olla sivuilla jotka ajavat{' '}
                            <a href='https://github.com/devgeniem/dustpress' target='_blank' rel='noreferrer'>
                                dustpress
                            </a>
                            :ia jotta niistä saadaan debugattua modeleiden dataa ja suorituskykyä. Päätimme siirtää sen selainlaajennukseksi devtoolsiin parantaaksemme sivuston suorituskykyä ja kehittäjäkokemusta, tein sen koska minulla oli aiempaa kokemusta pienten selainlaajennusten kehittämisestä henkilökohtaiseen käyttöön.
                        </p>
                    ),
                },
                cv: {
                    siteDescription: (
                        <p>
                            Tämä nykyinen sivusto, eli{' '}
                            <a href='https://cv.a-m.fi' target='_blank' rel='noreferrer'>
                                https://cv.a-m.fi
                            </a>{' '}
                            Tämä on minimalistinen online-CV, joka on tarkoitus pitää mahdollisimman offline-ystävällisenä kustannusten minimoimiseksi. Siksi se on rakennettu{' '}
                            <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
                                Next.js
                            </a>
                            'n staattisen exportin avulla ja hostattu julkisesti GitHub Pages:issa.
                        </p>
                    ),
                },
            },
        },
    },
}
