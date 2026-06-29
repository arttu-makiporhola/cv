import { useLanguage } from '../contexts/LanguageContext'
import HistoryCardItem from './HistoryCardItem'
import { GeniemIcon, HionDigitalIcon } from './icons'
import ShowMore from './ShowMore'

export default function HistoryCard() {
    const { t } = useLanguage()

    return (
        <section id='history' className='flex flex-col mb-10 break-inside-avoid'>
            <h2 className='text-3xl font-bold min-h-10'>{t('historyCard.title')}</h2>
            <div className='flex flex-col'>
                <HistoryCardItem
                    title='Hion Digital Oy'
                    url='https://www.hiondigital.com/'
                    logo={
                        <div className='text-[3rem] -top-4 print:-top-6 bold relative'>
                            <span className='text-transparent selection:bg-blue-900 selection:text-blue-900'>HION</span>
                            <div className='absolute left-0 top-0 w-full h-full pointer-events-none'>
                                <HionDigitalIcon />
                            </div>
                        </div>
                    }
                    position='Cloud Architect / DevOps Engineer / Lead Developer'
                    start={new Date('2021-04-21')}
                    moreInfo={<ShowMore showInPrint={true}>{t('historyCard.hionDigital')}</ShowMore>}
                />

                <hr className='hidden mt-5 print:block' />

                <HistoryCardItem
                    title='Geniem Oy'
                    url='https://web.archive.org/web/20230410231433/https://www.geniem.fi/'
                    logo={
                        <div className='text-[2rem] pr-10 top-0 bold relative'>
                            <span className='text-transparent selection:bg-blue-900 selection:text-blue-900'>Geniem</span>
                            <div className='absolute left-0 top-0 w-full h-full pointer-events-none'>
                                <GeniemIcon />
                            </div>
                        </div>
                    }
                    position='Full-Stack Developer / Systems Administrator'
                    start={new Date('2016-09-12')}
                    end={new Date('2021-04-21')}
                    moreInfo={<ShowMore showInPrint={true}>{t('historyCard.geniem')}</ShowMore>}
                />
            </div>
        </section>
    )
}
