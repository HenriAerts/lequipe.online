import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
    type: "button" | "submit";
    firstTitel: string;
    secondTitel?: string;
    icon?: string;
    variant?: "btn_clear" | "btn_clear_gray" | "btn_clear_gray2";
    link1: string;
    link2?: string;
}
const Button = ({ type, firstTitel, secondTitel, icon, variant, link1, link2}: ButtonProps) => {
  return (
    <button
        className={`select-none flexCenter gap-9 rounded-full ${variant} cursor-pointor`} 
        type={type}
    >
        <Link href={`${link1}`} className="regular-h5 whitespace-nowrap">{firstTitel}</Link>
        {secondTitel === undefined ? null : <Link href={`${link2}`} className="regular-h5 whitespace-nowrap">{secondTitel}</Link>}
        {icon && <Image src={icon} className="rotate-[135deg] " alt={firstTitel + secondTitel} width={24} height={24}/> }
    </button>
  )
}

export default Button