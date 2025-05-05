import HeroSection from "@/components/heroSection/HeroSection";
import HeroTitle from "@/components/heroSection/HeroTitle";



export default function Services() {
    
    return (
        <>
              <HeroSection 
                  block1={
                    <div className='hero-section-1'>
                      <HeroTitle title1='Our Comprehensive' title2="Digital Solutions" 
                      text = {<p className='hero-text'>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>} 
                      />
                      
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