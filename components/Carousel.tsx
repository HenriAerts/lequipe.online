import Image from 'next/image'

type ImageProps = {
    animation: 'animate-infinite-scroll-lr' | 'animate-infinite-scroll-rl'
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    image7: string;
    padding?: string;
}

const Carousel = ({animation, image1, image2, image3, image4, image5, image6, image7, padding}: ImageProps) => {
  return (
<div 
className={`select-none w-full inline-flex flex-now ${padding}`}>
    <ul className= {`flex items-center justify-center gap-2 md:justify-start [&_li]:mx-3 [&_img]:max-w-none ${animation} `} >
        <li className='flexCenter rounded-full ${variant} cursor-pointor'>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image1}/>
        </li>
        <li className='flexCenter rounded-full cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image2}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image3}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image4}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image5}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image6}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image7}/>
        </li>
{/* es wiederholt sich hier */}
        <li className='flexCenter rounded-full ${variant} cursor-pointor'>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image1}/>
        </li>
        <li className='flexCenter rounded-full cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image2}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image3}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image4}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image5}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image6}/>
        </li>
        <li className='flexCenter rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image7}/>
        </li>
    </ul>
    <ul className={`flex items-center justify-center gap-2 md:justify-start [&_li]:mx-3 [&_img]:max-w-none ${animation}`}>
        <li className='flexCenter gap-2 rounded-full cursor-pointor'>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image1}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image2}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image3}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image4}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image5}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image6}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image7}/>
        </li>
{/* es wiederholt sich hier */}
        <li className='flexCenter gap-2 rounded-full cursor-pointor'>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image1}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image2}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image3}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image4}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w object-cover rounded-full' src={image5}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h carousel-w2 object-cover rounded-full' src={image6}/>
        </li>
        <li className='flexCenter gap-2 rounded-full ${variant} cursor-pointor '>
            <img className='carousel-h w-[150px] md:w-[325px] object-cover rounded-full' src={image7}/>
        </li>
    </ul>
</div>
  )
}

export default Carousel