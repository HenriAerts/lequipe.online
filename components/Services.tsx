import React from 'react'
import ServiceContainer from './ServiceContainer'

const Services = () => {
  return (
    <>
    <section className='relative max-container padding-container flex flex-col gap-10 py-32 md:gap-20 lg:py-20  z-10'>
      {/* border-2 border-red-500 */}
      <h2 className='regular-h3'>WHAT<span className='italic ' > WE </span>DO?</h2>
      <p className='regular-p md:pb-8'>L'Èquipe vereint Kreativität, Technologie und Leidenschaft, um einzigartige digitale Erlebnisse zu schaffen. Unser Team von jungen und talentierten Profis steht bereit, um moderne Unternehmen auf ihrer Reise der Neuentwicklung zu begleiten.</p>
      <ServiceContainer 
        header='Go-To-Market Brand & Website'
        paragraph='Entdecke die Kunst der digitalen Präsentation! Unser Team von Webdesign-Experten erstellt maßgeschneiderte Websites, die nicht nur ästhetisch ansprechend sind, sondern auch eine nahtlose Benutzererfahrung bieten. Von der Idee bis zur Umsetzung sind wir hier, um deine Vision zum Leben zu erwecken.'
      />
      <ServiceContainer
        header='Branding Kampagnen'
        paragraph='Deine Marke ist einzigartig - und das sollte sie auch ausstrahlen! L´Èquipe entwickelt kreative und durchdachte Branding-Kampagnen, die das Wesen deines Unternehmens einfangen. Vom Logo-Design bis zur umfassenden Markenstrategie sind wir hier, um deine Marke zum Strahlen zu bringen.'
      />
    </section>
    </>
  )
}

export default Services