import React from 'react'
import Button from './Button'
import Carousel from './Carousel'

const Mission = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-10 py-32 md:gap-20 lg:py-20  '>
      {/* border-2 border-red-500 */}
      <h2 className='self-center regular-h3'><span className='italic' >PERFECT</span> MATCH</h2>
        <p className='regular-p'>Bei L'Èquipe glauben wir daran, dass jedes Unternehmen eine einzigartige Geschichte zu erzählen hat. Unsere Philosophie ist es, diese Geschichte durch kreatives Design und innovative Technologie zum Leben zu erwecken. <br/><br/>Mit unserer Arbeit wollen wir “the perfect match” zwischen Schönheit und Funktionalität schaffen. Wir denken, keins kann ohne das andere. <br/><br/> Wir verstehen, dass der digitale Raum dynamisch ist, und daher sind wir stets darauf bedacht, frische Ideen zu entwickeln, die sich nahtlos in die sich ständig weiterentwickelnde digitale Landschaft integrieren.</p>
        <div className='self-center'>
          <Button
              type="button"
              firstTitel="Mehr zu unserer Mission"
              variant="btn_clear_gray2"   
              icon='./arrow.svg' 
              link1='/about'
          />
        </div>
        <div className='flex flex-col gap-6 pt-32 '>
          <Carousel
            animation='animate-infinite-scroll-lr'
            image1="/pexels-ksenia-chernaya-3951736.jpg"
            image2="Untitled10.jpg"
            image3="/pexels-mart-production-7550294.jpg"
            image4="/pexels-valeriya-kobzar-17322370.jpg"
            image5="/E.png"
            image6="/pexels-canva-studio-3194519.jpg"
            image7="/pexels-anna-shvets-5641902.jpg"
          />
          <Carousel
            animation='animate-infinite-scroll-rl'
            image1="/pexels-karolina-grabowska-5904045.jpg"
            image2="/pexels-polina-zimmerman-3747140.jpg"
            image3="/pexels-cottonbro-studio-4069292.jpg"
            image4="/pexels-kampus-production-6248966.jpg"
            image5="/L’Équipe.png"
            image6="/pexels-andrew-neel-3178818.jpg"
            image7="/pexels-canva-studio-3153199.jpg"
          />
        </div>
  </section>
  )
}

export default Mission