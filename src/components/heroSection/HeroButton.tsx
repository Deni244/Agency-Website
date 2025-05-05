import Image from "next/image";
import '../../styles/heroBtn.css'

type Props = {
    text?: string;
    shape?: React.ReactNode;
    classStyle?: string;
}
const HeroButton = ({text, classStyle, shape}:Props) =>{
    return (
        <button className="hero-btn">
            <div className={`${classStyle} hero-btn-img-cnt`}>
                    <Image width={24} height={24} src={'/IconArrow.png'} alt="Arrow"/>
                    {shape}
                    
            </div>
            {text && <span className="hero-btn-text">{text}</span>}
        </button>
    )
}

export default HeroButton;