import ShowMore from '../components/ShowMore';

export type Language = 'en' | 'fi';

export type Translations = {
  [key: string]: string | React.ReactNode | Translations;
};

export const translations: Record<Language, Translations> = {
  en: {
    actions: {
      toggleTheme: 'Toggle theme',
      switchToFinnish: 'Vaihda suomeksi',
    },
    components: {
      ShowMore: {
        showMore: 'Show more...',
        showLess: 'Show less',
      },
    },
    profileCard: {
      text: <div>
        <p className='text-4xl font-bold'>Hi</p>
        <p>I'm a long-time (10-y) Full-stack developer. Nowadays, I'm more on the DevOps & infra side.</p>
        <br />
        <p>The thing I enjoy most, is integrating many systems to work together seamlessly, I'd compare it to fitting together a puzzle where you sometimes have to fix a couple pieces.</p>
        <br />
        <p>I've been told that im very "smooth" to work with, my aim is always to make everything "simpler" for everyone involved, so that made me quite glad.</p>
      </div>,
      footer: "A short list of things I've liked using and/or integrating together:",
    },
    historyCard: {
      title: 'History',
      hionDigital: <div>
        <p>During my time at Hion I've stepped into more of a DevOps role, from creating and managing <a href='https://s-ryhma.fi/' target='_blank' rel='noreferrer'>SOK</a>'s at the time WordPress AWS infra, migrating multiple existing projects to Google Cloud, to optimizing Google Cloud solutions and automating them via Terraform.</p>
        <p className='text-stone-500 mt-5 text-xs'>* Geniem Oy was acquired by <a href='https://www.saaripartners.fi' target='_blank' rel='noreferrer'>Saari Partners Oy</a>, and later rebranded as Hion Digital Oy</p>
      </div>,
      geniem: <p className='mb-5'>During my time at Geniem I was mostly involved with WordPress sites in various different environments, these sites had anything from stores to livestream functionality, but there were some React apps like <a href='https://www.buildie.fi/' target='_blank' rel='noreferrer'>Buildie</a> too, I was also the main person doing linux compatibility for our internal tools and containers. I enjoyed working with various API's at the time most to create different kinds of integrations.</p>,
    },
    projectsCard: {
      title: 'Projects',
      description: 'Most of my personal projects arent really in a "presentable" state yet, and most of my actual work on GitHub is for private repositories so there isnt much content showable there, but these are some that are at a good enough point to show, but still at various states of development:',
      git: {
        public: 'Public',
        updatedOn: 'Updated on',
      },
      projectRepos: {
        podcastAutoCleanCli: {
          siteDescription: <p>I made this project for personal use as i had some video content i wanted to generate subtitles for per speaker, auto-clean audio via ai, and auto-cut based on silence, resulting finally into a <a href='https://kdenlive.org/' target='_blank' rel='noreferrer'>kdenlive</a> project file that would allow you to just delete unnecessary sections in premade blocks, and then just export without any more work. All ai selections i made were based on active use, "foreseeable support", if is open source, and could be ran locally via docker</p>,
        },
        game: {
          siteDescription: <div>
              <p>A very incomplete 3d physics platformer, written as a sort of learning project for using <a href='https://rust-lang.org/' target='_blank' rel='noreferrer'>Rust</a> and <a href='https://godotengine.org/' target='_blank' rel='noreferrer'>Godot</a> to make potentially high performance web games with open source tools.</p>
              <br />
              <a href="https://godbone.gitlab.io/test" className='hidden print:block' target='_blank' rel='noreferrer'>https://godbone.gitlab.io/test</a>
              <ShowMore>
                <div>
                  <a href="https://godbone.gitlab.io/test" className='break-all' target='_blank' rel='noreferrer'>https://godbone.gitlab.io/test</a>
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
          </div>,
        },
        dustpressDebugger: {
          siteDescription: <p>"dustpress-debugger" was a WordPress plugin to add to sites running <a href='https://github.com/devgeniem/dustpress' target='_blank' rel='noreferrer'>dustpress</a> to debug model data and performance, we decided to move it into a browser extension shown in devtools instead to improve site performance and developer experience, and i did that as i had previous experience with developing minimal browser extensions for personal use.</p>,
        },
        cv: {
          siteDescription: <p>This current site. This is a minimal simple site to showcase stuff about me, its intended to be completely offline to minimize all possible costs, as such it's built via <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>next.js</a>'s static export and hosted publicly on GitHub Pages.</p>,
        },
      },
    },
  },
  fi: {
    actions: {
      toggleTheme: 'Vaihda teemaa',
      switchToFinnish: 'Vaihda englanniksi',
    },
    components: {
      ShowMore: {
        showMore: 'Näytä enemmän...',
        showLess: 'Näytä vähemmän',
      },
    },
    profileCard: {
      text: <div>
        <p className='text-4xl font-bold'>Moi</p>
        <p>Oon pitkän uran (10-v) Full-stack-kehittäjä. Nykyään enemmän DevOps- ja infra-puolella.</p>
        <br />
        <p>Eniten tykkään siitä, kun eri järjestelmät saadaan toimimaan saumattomasti yhdessä. Vertaisin sitä palapeliin jossa välillä joutuu fiksaan pari palaa.</p>
        <br />
        <p>Mulle on sanottu että mun kanssa on ollut todella "sujuva" työskennellä. Koitan aina tehdä kaikesta mahdollisimman "yksinkertaista" kaikille osapuolille, joten se teki mut aika tyytyväiseks.</p>
      </div>,
      footer: 'Lyhyt lista asioista, joita olen tykännyt käyttää ja/tai integroida toisiinsa:',
    },
    historyCard: {
      title: 'Historia',
      hionDigital: <div>
        <p>Hionilla ollessani olen siirtynyt enemmän DevOps-rooliin: tein ja ylläpidin mm. <a href='https://s-ryhma.fi/' target='_blank' rel='noreferrer'>SOK</a>:in aikaisia WordPressin AWS-infrastruktuureja, migroin useita olemassa olevia projekteja Google Cloudiin, optimoin Google Cloud -ratkaisuja, ja automatisoin niitä Terraformilla.</p>
        <p className='text-stone-500 mt-5 text-xs'>* Geniem Oy siirtyi osaksi <a href='https://www.saaripartners.fi' target='_blank' rel='noreferrer'>Saari Partners Oy</a>:tä, ja myöhemmin rebrändättiin Hion Digital Oy:ksi</p>
      </div>,
      geniem: <p className='mb-5'>Geniemillä ollessani olin pääosin tekemisissä WordPress-sivustojen kanssa erilaisissa ympäristöissä - näissä oli toimintoja kaupoista livestreameihin. Oli myös joitain React-appiksia, kuten <a href='https://www.buildie.fi/' target='_blank' rel='noreferrer'>Buildie</a>. Olin myös vastuussa sisäisten työkalujen ja konttien Linux-yhteensopivuudesta. Eniten näihin aikoihin tykkäsin tehdä erilaisia integraatioita API:en kanssa.</p>,
    },
    projectsCard: {
      title: 'Projektit',
      description: 'Suurin osa omista projekteistani ei ole vielä "esittelykelpoisessa" kunnossa, ja suurin osa töistäni GitHubissa on yksityisissä repoissa, joten siellä ei ole paljoa näkyvillä. Tässä kuitenkin muutamia projekteja, jotka ovat riittävän valmiita esiteltäväksi, mutta kuitenkin erilaisissa vaiheissa kehitystä:',
      git: {
        public: 'Julkinen',
        updatedOn: 'Päivitetty',
      },
      projectRepos: {
        podcastAutoCleanCli: {
          siteDescription: <p>Tein tämän projektin omaan käyttöön, koska minulla oli jonkin verran videosisältöä jolle halusin generoida tekstitykset per puhuja, automaattisesti puhdistaa äänen ai:lla, ja automaattisesti leikata hiljaisuuksien perusteella, lopputuloksena tulisi <a href='https://kdenlive.org/' target='_blank' rel='noreferrer'>kdenlive</a> projektitiedosto, joka mahdollisti turhien osioiden poistamisen valmiiksi tehdyissä lohkoissa, ja sitten vain renderöi ilman muuta lisätyötä. Kaikki ai valinnat perustin aktiiviseen käyttöön, "ennakoitavissa olevaan tukeen", avoimeen lähdekoodiin, ja siihen että sitä voi ajaa paikallisesti dockerin kautta.</p>,
        },
        game: {
          siteDescription: <div>
              <p>Erittäin keskeneräinen 3D-fysiikkaplatformeri, kirjoitettu periaatteessa oppimisprojektina käyttäen <a href='https://rust-lang.org/' target='_blank' rel='noreferrer'>Rustia</a> ja <a href='https://godotengine.org/' target='_blank' rel='noreferrer'>Godotia</a> tavoitteena tehdä suorituskykyisiä web-pelejä avoimilla työkaluilla.</p>
              <br />
              <a href="https://godbone.gitlab.io/test" className='hidden print:block' target='_blank' rel='noreferrer'>https://godbone.gitlab.io/test</a>
              <ShowMore>
                <div>
                  <a href="https://godbone.gitlab.io/test" className='break-all' target='_blank' rel='noreferrer'>https://godbone.gitlab.io/test</a>
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
                              <div className='pl-5'>Pienenny/Hypää</div>
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
                              <div className='pl-5'>Pienennä/Hypää</div>
                          </div>
                      </div>

                      <p className='mt-5 text-stone-500'>Jatkan tän kehitystä todennäkösesti vielä joskus. (tasojen & maailman suunnittelu on vaikeeta)</p>
                  </div>
                </div>
              </ShowMore>
          </div>,
        },
        dustpressDebugger: {
          siteDescription: <p>"dustpress-debugger" oli WordPress lisäosa, jonka tarkoitus oli olla sivuilla jotka ajavat <a href='https://github.com/devgeniem/dustpress' target='_blank' rel='noreferrer'>dustpress</a>:ia jotta niistä saadaan debugattua modeleiden dataa ja suorituskykyä. Päätimme siirtää sen selainlaajennukseksi devtoolsiin parantaaksemme sivuston suorituskykyä ja kehittäjäkokemusta, tein sen koska minulla oli aiempaa kokemusta pienten selainlaajennusten kehittämisestä henkilökohtaiseen käyttöön.</p>,
        },
        cv: {
          siteDescription: <p>Tämä nykyinen sivusto. Se on minimalistinen esittelysivu, joka on tarkoitus pitää mahdollisimman offline-ystävällisenä kustannusten minimoimiseksi. Siksi se on rakennettu <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>Next.js</a>'n staattisen exportin avulla ja hostattu julkisesti GitHub Pages:issa.</p>,
        },
      },
    },
  },
};
