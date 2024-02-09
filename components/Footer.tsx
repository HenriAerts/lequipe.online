import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 container padding-wrapper max-wrapper bg-blue-10 py-10 z-10 padding-wrapper'> 
    <ul className='flexBetween'>
      <li>
        <Link className='text-[14px] font-[400] md:text-[18px] text-white ' href="mailto:info@lequipe.online">
          info@lequipe.online
        </Link>
      </li>
      <li>
        <Link className='text-[18px] font-[400] md:text-[20px] italic text-white ' href="/">
            L’Équipe
        </Link>
      </li>
      <li className='flex gap-10'>
        <Link className='text-[14px] font-[400] md:text-[18px] text-white italic' href="/datenschutz">
            Datenschutz
        </Link>

        <Link className='text-[14px] font-[400] md:text-[18px] text-white italic' href="/impressum">
            Impressum
        </Link>
      </li>

    </ul>
</footer>
  )
}

export default Footer