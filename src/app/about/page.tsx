import HeroSection from "@/components/heroSection/HeroSection";
import HeroTitle from "@/components/heroSection/HeroTitle";


export default function About() {
    

    return (
        <>
            <HeroSection 
                block1={
                <div className='hero-section-1'>
                    <HeroTitle title1='Elevating Brands' title2="in the Digital Age" />
                </div>

                }
                block2 = {
                <div className='hero-section-2'>

                </div>
                }
            />
        </>
    )
}