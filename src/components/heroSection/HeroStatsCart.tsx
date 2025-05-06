
import '../../styles/heroSection/heroStatsCart.css'
type Props = {
    text?: string;
    title?: string;
    button?: React.ReactNode;
}

export default function HeroStatsCart({text, title, button}: Props) {
    

    return (
        <div className='hero-stats-cart-cnt'>
           { title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
            {button}
        </div>
    )
}