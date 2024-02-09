import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className='relative padding-container flex flex-col gap-10 py-32 md:gap-28 lg:py-20 rounded-b-[30px] z-30 bottom-[110px] bg-white overflow-hidden'>
      {/* border-2 border-red-500 */}
      <div className='selfCenter flex flex-col max-container'>
        <h2 className='regular-h3  '>LET'S GET TO KNOW EACH OTHER.</h2>
        {/* border-2 border-blue-500 */}
        <div className='select-none flex items-center gap-4'>
        {/* border-2 border-yellow-500 */}
          <Link className='regular-h3 italic cursor-pointer backdrop:transition duration-300 transform hover:-translate-y-2  decoration-2 hover:underline' href="mailto:info@lequipe.online">Get in touch.</Link>
          <Image src="./arrow.svg" className="rotate-[135deg] size-16" alt="arrow" width={24} height={24}/>
        </div>
      </div>
      <h1 className='relative select-none self-end  right-[-85px] mb-[-9rem] lg:mb-[-6rem] regular-h1 '>L’Équipe</h1>
    </section>
  )
}

export default CallToAction;