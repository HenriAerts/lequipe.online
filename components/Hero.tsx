import React from 'react'
import Carousel from './Carousel'

const Hero = () => {
  return (
    <section className='relative padding-wrapper flex flex-col gap-20 py-10 md:gap-[200px] pt-[500px] md:pt-[650px] '>
      {/* border-2 border-red-500 */}
      {/* <h1 className='select-none self-end relative mt-32 right-[-30px] regular-h1'>L’Équipe</h1> */}
      <p className=' max-w-[600px] md:max-w-[1100px] regular-h2  '><span className='italic'>L’Équipe</span> YOUR GATEWAY TO MODERN DESIGN AND TECH BRILLIANCE</p>

      <Carousel
        animation='animate-infinite-scroll-rl'
        image1="/pexels-anete-lusina-6334228.jpg"
        image2="/E.png"
        image3="/pexels-cottonbro-studio-4065133.jpg"
        image4="/pexels-ksenia-chernaya-3951736.jpg"
        image5="/L’Équipe.png"
        image6="/pexels-cottonbro-studio-4065898.jpg"
        image7="/logo.jpg"
        padding="md:pb-20"
      />
    </section>
  )
}

export default Hero