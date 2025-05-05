

import Image from 'next/image';
import '../../styles/heroTitle.css'
import HeroButton from './HeroButton'


type Props = {
    title1? : string,
    title2? : string,
    text? : React.ReactNode;
}

export default function HeroTitle ({title1, title2, text}: Props) {


    return (
        <div className="hero-tittle-container">
            <div className="hero-title-1-cnt">
                <h1 className="hero-title">{title1?.toLocaleUpperCase()}</h1>
                <HeroButton 
                text='START A PROJECT'
                classStyle='hero-size-img-title'
                shape = {<Image className="hero-btn-shape" width={65} height={77} src={'/Shape1.png'} alt="Shape"/>}
                />
            </div>
                <h1 className="hero-title">{title2?.toLocaleUpperCase()}</h1>
                {text}
        </div>
    )
}