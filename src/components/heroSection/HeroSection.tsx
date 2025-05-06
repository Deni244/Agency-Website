
import '../../styles/heroSection/heroSection.css'

type Props = {
    block1 : React.ReactNode;
    block2? : React.ReactNode;
    block3? : React.ReactNode;
}
export default function HeroSection({block1, block2, block3}: Props) {
    

    return (
        <div className="hero-section">
            {block1}
            {block2}
            {block3}
        </div>
    )
}