import Argumente from "@/components/components_about/Argumente";
import Motto from "@/components/components_about/Motto";
import Zielgruppe from "@/components/components_about/Zielgruppe";




export default function About() {
    return (
      <>
        <img className='select-none absolute w-screen object-cover z-0' src='/blueBlob1.svg'/>
        <Motto/>
        <img className='select-none absolute w-screen object-cover z-0 mt-[-75px]' src='/pinkBlob2.svg'/>
        <Argumente/>
        <Zielgruppe/>
      </>
    )
  }