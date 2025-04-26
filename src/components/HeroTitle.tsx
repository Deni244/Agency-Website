

import '../styles/heroTitle.css'
import HeroButton from './HeroButton'


type Props = {
    title1? : string,
    title2? : string,
}

export default function HeroTitle ({title1, title2}: Props) {


    return (
        <div className="hero-tittle-container">
            <div className="hero-title-1-cnt">
                <h1 className="hero-title">{title1?.toLocaleUpperCase()}</h1>
                <HeroButton />
            </div>
                <h1 className="hero-title">{title2?.toLocaleUpperCase()}</h1>
        </div>
    )
}