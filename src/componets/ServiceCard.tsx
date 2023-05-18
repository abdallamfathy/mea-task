import React from 'react'

interface ServiceCardProps {
    title: string;
    about: string;
    Icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    about,
    Icon
}) => {
  return (
    <div className='flex flex-col items-center gap-6'>
        <div className='w-28 h-28 p-8 rounded-full border border-black flex justify-center items-center'>
            <img src={Icon} alt='icon'/>
        </div>
        <h4 className=' text-xl'>{title}</h4>
        <p className='text-center leading-relaxed w-[220px] text-sm opacity-50 -mt-4 '>{about}</p>
    </div>
  )
}

export default ServiceCard