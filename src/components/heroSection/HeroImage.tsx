
import Image from 'next/image'
import '../../styles/heroImage.css'
import HeroButton from './HeroButton'

export default function HeroImage() {
 
    return (
        <div className='hero-image-section'>
                <HeroButton 
                classStyle='hero-sect-2-size-img'
                    shape= {<Image className="hero-btn-shape" width={111} height={136} src={'/Shape2.png'} alt="Shape"/>}
                />
            <Image width={593} height={465} src="/Image.png" alt="Image" priority />
            <div className='hero-image-content'>
                <h3>ESTATEIN REAL ESTATE</h3>
                <p>Web Development.</p>
            </div>
    </div>
    )
}