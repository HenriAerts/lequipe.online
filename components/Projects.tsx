"use client"

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  return (
    <>

      <section className='relative  flex flex-col gap-10 py-32 md:gap-28 lg:py-20 z-10'>
        <div className='max-container   padding-container '>
          <h2 className='regular-h3 pb-10 md:pb-28'>PROJEKTE</h2>
          <p className='regular-p'>Wir arbeiten eng mit Startups und etablierten Firmen zusammen. Hier ein Ausschnitt von Arbeiten von Firmen mit denen wir die Arbeit genossen haben!</p>
        </div>

        <div className='px-6 xl:px-0'>
          <Swiper 
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={45}
          className='w-full pt-10 h-full'>

            <SwiperSlide className='max-w-[1200px] flex justify-center items-center h-full pt-3'>
              <ProjectContainer
              titel1="Lenz "
              titel2="Glasreinigung"
              logo='/Untitled.jpg' 
              description='Nicholas Lenz ist ein junger ambitionierter Entrepreneur der bereits früh hochwertige Dienstleistungen für Gewerbe als auch für Privat Personen bietet. ' 
              services1="Branding"
              services2="Konzeption"
              services3="Wordpress Development"
              link='https://lenzglasreinigung.de/'
              />
            </SwiperSlide>

            <SwiperSlide className='md:max-w-[1200px]  flex justify-center items-center h-full pt-3'>
              <ProjectContainer
              titel1="TPI "
              titel2="Projekt GmbH"
              logo='/logo.jpg' 
              description='TPI Projekt GmbH  ist eine auf Bad modernisierung spizialisierte Baufirma, mit lokalem Bezug. Zusammen mit Lokalen Partnern renoviert und Saniert TPI in Höchstzeit.' 
              services1="Branding"
              services2="Konzeption"
              link="/"
              />
            </SwiperSlide>

            <SwiperSlide className='max-w-[1200px] flex justify-center items-center h-full pt-3'>
              <ProjectContainer
              titel1="Miano "
              titel2="Allround Service"
              logo='/Untitled10.jpg' 
              description='Ein Allroundsercvice für alles, was Sie brauchen! Von Reinigung bis Hausmeisterservice - MAS bietet Ihnen mit Profi Personal den besten Job.' 
              services1="Webdesign"
              services2="Konzeption"
              services3="Development"
              link='/'
              />
            </SwiperSlide>
          </Swiper>
        </div>
        
          
      </section>

    </>
  )
}

export default Projects