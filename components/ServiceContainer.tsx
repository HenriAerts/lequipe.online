'use client'
import Image from 'next/image';
import { useState } from 'react';


type ServiceProps = {
    header: string,
    paragraph: string
}

const ServiceContainer = ({header, paragraph}: ServiceProps) => {
    const [description, setDiscription] = useState(false)
    
    return (
        <div onClick={() => setDiscription((shown)=>!shown)} className='select-none w-max-[1200px] container_clear flex flex-col gap-5 cursor-pointer'>
            <div className='flex justify-between items-center gap-5 '>
                <h3 className='regular-h4 uppercase w-3/5'>{header}</h3>
                <Image src="./arrow.svg" className={`size-8 md:size-12  ${description ? 'rotate-[225deg]' : 'rotate-[135deg]'} ease-in-out duration-300`} alt="arrow" width={24} height={24}/>
            </div>
            {description ? <p className='regular-p2 pt-8'>{paragraph}</p> : null }
        </div>
  )
}

export default ServiceContainer