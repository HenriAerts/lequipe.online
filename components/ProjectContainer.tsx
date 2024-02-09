"use client"

import React from 'react'
import ServicesLabel from './ServicesLabel'
import Link from "next/link";

type ProjectProps = {
    titel1: string;
    titel2: string;
    logo: string;
    description: string;
    services1: string;
    services2: string;
    services3?: string;
    link?: string;
}


const ProjectContainer = ({titel1, titel2, logo, description, services1, services2, services3, link}: ProjectProps) => {
  return (
    <Link href={`${link}`} className='select-none cursor-pointer h-[550px] md:h-[775px] container_clear3 flex flex-col justify-between gap-10'>
        <div className='flex flex-col justify-between gap-10'>
            <h3 className='block regular-h4 uppercase w-4/5'>{titel1}<img className='ml-2 relative inline-block align-middle mt-[-10px] w-16 h-10 md:w-20 md:h-14 rounded-full' src={logo} alt={`${titel1}`}/><br/>{titel2}</h3>
            <p className='regular-p'>{description}</p>
        </div>

        <div className='flex felx-row justify-between'>
            <div className='flex flex-wrap gap-2 w-2/5 '>
                <ServicesLabel props={`${services1}`}/>
                <ServicesLabel props={`${services2}`}/>
                {services3 && <ServicesLabel props={`${services3}`}/> }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 flex self-end rotate-180" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" ><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"/></svg>
        </div>
        
    </Link>
  )
}

export default ProjectContainer