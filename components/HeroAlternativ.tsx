import React from 'react';

type Props = {
  props: string;
}

const HeroDatenschutz = ({props}: Props) => {
  return (
    <section className='padding-container flex py-10  pt-[200px]'>
      <div className=' flex flex-col max-container w-full' >
        <p className=' max-w-[600px] md:max-w-[1100px] regular-h2  '>{props}</p>
      </div>
  </section>
  )
}

export default HeroDatenschutz