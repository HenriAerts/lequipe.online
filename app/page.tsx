import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Projects from '@/components/Projects'
import Services from '@/components/Services'


export default function Home() {
  return (
    <>
      <img className='select-none absolute w-screen object-cover z-0' src='/Component.svg'/>
      <Hero/>
      <img className='select-none absolute flex bg-center h-dvh w-screen z-0'  src='/pinkBlob2.svg'/>
      <Services/>
      <Mission/>
      <img className='select-none absolute flex bg-center h-dvh w-screen z-0'  src='/blueBlob1.svg'/> 
      <Projects/>
    </>
  )
}
