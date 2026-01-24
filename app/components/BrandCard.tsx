interface BrandCardProps {
    icon: React.ReactNode
    title: string
    href: string
    foreground?: string
    background?: string
}

const BrandCard: React.FC<BrandCardProps> = ({ icon, title, href, foreground, background }) => {
    return (
        <a href={href} target='_blank' rel='noreferrer' className='pl-1 pr-1 print:pl-0 print:pr-0 print:border-0 print:bg-none shadow-lg print:shadow-none rounded-xs' style={{ color: foreground, backgroundColor: background }}>
            <div className='flex items-center justify-center'>
                <div className='w-5 h-5 print:hidden'>{icon}</div>
                <div className='ml-1 font-medium pr-1 print:ml-0 print:pr-0 print:text-black'>{title}</div>
            </div>
        </a>
    )
}

export default BrandCard
