'use client'
import Image from 'next/image';
import { useState } from 'react';

type ServiceProps = {
    header: string,
    paragraph: string
}

const ArgumentContainer = ({header, paragraph}: ServiceProps) => {
    const [description, setDiscription] = useState(false)
    return (
        <div onClick={() => setDiscription((shown)=>!shown)} className='select-none w-full lg:w-[30%] container_clear2 lg:min-h-[250px] flex flex-col gap-5 justify-between cursor-pointer'>
            <div className='flex flex-col justify-between items- gap-5'>
                <h3 className='regular-p3 uppercase'>{header}</h3>
                {description ? <p className='regular-p2'>{paragraph}</p> : null }
            </div>
            <Image src="./arrow.svg" className={`size-6 lg:size-10 flex flex-col self-end  ${description ? 'rotate-[45deg]' : 'rotate-[225deg]'} ease-in-out duration-300`} alt="arrow" width={24} height={24}/>
        </div>
  )
}

export default ArgumentContainer