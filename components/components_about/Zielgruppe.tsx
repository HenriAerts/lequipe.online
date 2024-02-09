import React from 'react'
import Carousel from '../Carousel'


const Zielgruppe = () => {
    return (
        <section className='relative max-container padding-container flex flex-col gap-10 py-32 md:gap-28 mb-40'>
            {/* border-2 border-red-500 */}
          <h2 className='self-center regular-h3'>UNSERE<span className='italic' > ZIELGRUPPE</span></h2>
            <p className='regular-p'>Wir richten uns an moderne Unternehmen, die sich neu entdecken möchten. Egal, ob du ein Start-up bist, das den Markt betritt, oder ein etabliertes Unternehmen, das frischen Wind braucht - L'Èquipe ist hier, um deiner Marke den Wow-Faktor zu verleihen.
                <br/><br/>Bereit für eine kreative Reise? Kontaktiere uns noch heute, um mehr darüber zu erfahren, wie L'Èquipe deine Marke auf das nächste Level bringen kann. Wir freuen uns darauf, mit dir zusammenzuarbeiten!
            </p>
            <Carousel
                animation='animate-infinite-scroll-lr'
                image1="/pexels-ksenia-chernaya-3951736.jpg"
                image2="/pexels-polina-zimmerman-3747140.jpg"
                image3="/pexels-cottonbro-studio-4069292.jpg"
                image4="/pexels-canva-studio-3153199.jpg"
                image5="/Untitled10.jpg"
                image6="/pexels-cottonbro-studio-4065898.jpg"
                image7="/logo.jpg"
                />
        </section>
    )
}

export default Zielgruppe