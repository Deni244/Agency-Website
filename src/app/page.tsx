
import HeroSection from '@/components/heroSection/HeroSection'
import HeroTitle from '@/components/heroSection/HeroTitle'

import '../styles/home.css'
import HeroImage from '@/components/heroSection/HeroImage'

export default function Home() {
  return (
    <>
      <HeroSection 
          block1={
            <div className='hero-section-1'>
              <HeroTitle 
                  title1='Digital Solutions' 
                  title2="That Drive Success"
                  text = {<p className='hero-text'>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape.</p>} 
              />
             
            </div>

          }
          block2 = {
            <div className='hero-section-2'>
                <HeroImage />
            </div>
          }
          />
     </>
  )
}
