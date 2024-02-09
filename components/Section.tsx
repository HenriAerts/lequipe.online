import React from 'react';

type SectionProps = {
    header: string;
    text: string;
    padding?: string;
}

const Section = ({header, text, padding}: SectionProps) => {
  return (
    <>
    <section className={`relative max-container padding-container flex flex-col gap-10 py-8 z-10 ${padding}`}>
      {/* border-2 border-red-500 */}
      <h2 className='regular-h4'>{header}</h2>
      <p className='regular-p'>{text}</p>
    </section>
    </>
  )
}

export default Section