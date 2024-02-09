import React from 'react'
import ArgumentContainer from './ArgumentContainer'
import Image from 'next/image'

const Argumente = () => {
    return (
        <>
            <section className='relative max-container padding-container flex flex-col gap-10 py-32 md:gap-28 z-10'>
                {/* border-2 border-red-500 */}
                <h2 className='regular-h3'>WARUM<span className='italic'> L'Èquipe?</span></h2>
                <div className='flex items-start gap-4 flex-row flex-wrap justify-between'>
                    <ArgumentContainer 
                    header='Kollaboration'
                    paragraph='Wir lieben es, neue Wege zu gehen und frische Ideen zu entwickeln, um deine Marke zu differenzieren.'
                    />
                    <ArgumentContainer
                    header='Innovation'
                    paragraph='Deine Ideen sind uns wichtig. Wir arbeiten eng mit dir zusammen, um sicherzustellen, dass jede Lösung deinen Anforderungen entspricht.'
                    />                
                    <ArgumentContainer
                    header='Einfachheit & Klarheit '
                    paragraph='Unser Designansatz ist einfach, modern und fokussiert darauf, Botschaften klar zu vermitteln.'
                    />
                </div>
            </section>
        </>
    )
}

export default Argumente