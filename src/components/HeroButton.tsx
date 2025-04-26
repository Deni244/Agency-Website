import Image from "next/image";
import '../styles/heroBtn.css'

const HeroButton = () =>{
    return (
        <button className="hero-btn">
            <div className="hero-btn-img-cnt">
                    <Image width={24} height={24} src={'/IconArrow.png'} alt="Arrow"/>
                    <Image className="hero-btn-shape" width={65} height={77} src={'/Shape1.png'} alt="Shape"/>
            </div>
            <span className="hero-btn-text">START A PROJECT</span>
        </button>
    )
}

export default HeroButton;