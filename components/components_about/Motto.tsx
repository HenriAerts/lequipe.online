import React from 'react'
import Carousel from '../Carousel'
const Motto = () => {
    return (
        <section className='relative max-container padding-container flex flex-col gap-10 py-32 md:gap-20'>
          {/* border-2 border-red-500 */}
          <h2 className='mt-32 regular-h3'><span className='italic' >PERFECT</span> MATCH</h2>
          <p className='regular-p'>Bei L'Èquipe arbeiten Schönheit und Funktionalität Hand in Hand, um ein ganzheitliches Erlebnis zu schaffen. Wir streben danach, dass jede Website, jedes Design und jede Branding-Kampagne nicht nur ästhetisch beeindruckend ist, sondern auch nahtlos in den täglichen Ablauf deines Unternehmens integriert werden kann. <br/><br/> Schönheit allein reicht nicht aus. Unsere Websites und Branding-Kampagnen werden mit einem klaren Fokus auf Funktionalität entwickelt. Wir sorgen dafür, dass jeder Klick, jede Interaktion und jedes Element einen klaren Zweck erfüllt. Eine großartige Benutzererfahrung ist der Schlüssel zu langfristigem Erfolg.</p>
          <div className='flex flex-col gap-6 mt-32 '>
            <Carousel
              animation='animate-infinite-scroll-lr'
              image1="/pexels-mart-production-7550294.jpg"
              image2="/pexels-polina-zimmerman-3747140.jpg"
              image3="/pexels-cottonbro-studio-4069292.jpg"
              image4="/pexels-canva-studio-3153199.jpg"
              image5="/Untitled10.jpg"
              image6="/pexels-canva-studio-3194519.jpg"
              image7="/pexels-anna-shvets-5641902.jpg"
            />
            <Carousel
              animation='animate-infinite-scroll-rl'
              image1="/pexels-anete-lusina-6334228.jpg"
              image2="/E.png"
              image3="/pexels-cottonbro-studio-4065133.jpg"
              image4="/pexels-ksenia-chernaya-3951736.jpg"
              image5="/L’Équipe.png"
              image6="/pexels-cottonbro-studio-4065898.jpg"
              image7="/logo.jpg"
            />
          </div>
      </section>
    )
}

export default Motto