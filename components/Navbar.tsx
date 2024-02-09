import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {



  return (
    <nav className=' flexBetween max-wrapper container padding-wrapper fixed py-7 z-50  '>         
    {/* border-2 border-red-500 */}
        <Link className='select-none regular-p2 italic' href="/">
            L'Équipe
        </Link>
        <div className='flex gap-2'>
            <Button
                type="button"
                firstTitel="Start"
                secondTitel="About"
                variant="btn_clear"    
                link1='/'
                link2="/about"
            />
            <Button
                type="button"
                firstTitel="Kontakt"
                variant="btn_clear_gray"  
                link1='mailto:info@lequipe.online'  
                link2="/"
            />
        </div>
    </nav>
  )
}

export default Navbar