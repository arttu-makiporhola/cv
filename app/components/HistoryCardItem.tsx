import { useLanguage } from '../contexts/LanguageContext';
import TimeText from './TimeText';

interface HistoryCardItemProps {
    url: string;
    logo: React.ReactNode;
    title: string;
    position?: string;
    period?: string;
    start?: Date;
    end?: Date;
    moreInfo?: React.ReactNode | string;
}

const HistoryCardItem: React.FC<HistoryCardItemProps> = ({
    url,
    logo,
    title,
    position,
    start,
    end,
    moreInfo
}) => {
    const { t } = useLanguage();

    return (
        <div className='flex flex-col items-start mt-5 mb-5 border-1 rounded-md p-5 relative print:border-0 print:mb-0 print:p-0'>
            <a href={url} target='_blank' rel='noreferrer'>
                {title}
            </a>
            <p>{position}</p>
            <p>
                {start &&
                    <TimeText time={start} />
                }
                {end &&
                    <span>
                        <span> - </span>
                        <TimeText time={end} />
                    </span>
                }
            </p>

            { moreInfo &&
                <div className='mt-2'>
                    {moreInfo}
                </div>
            }

            <span className='max-w-full mt-5 ml-auto sm:absolute sm:right-5 sm:top-5 sm:ml-0 sm:mt-0'>
                {logo}
            </span>
        </div>
    );
}

export default HistoryCardItem;
