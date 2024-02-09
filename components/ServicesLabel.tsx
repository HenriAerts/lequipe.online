import React from 'react'
type LabelProps = {
    props: String;
}

const ServicesLabel = ({props}: LabelProps) => {
  return (
    <button
        className={`flexCenter gap-9 rounded-full label_service w-auto`} 
        type="button"
    >
        <span className="regular-p2 whitespace-nowrap">{props}</span>
    </button>
  )
}

export default ServicesLabel