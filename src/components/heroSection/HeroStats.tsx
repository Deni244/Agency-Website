

import '../../styles/heroSection/heroStats.css'
import HeroStatsCart from './HeroStatsCart'

export default function HeroStats() {
    
    return (
        <div className='hero-stats-cnt'>
            <HeroStatsCart title='CLIENTS' text='200+' />
            <HeroStatsCart title='PROJECTS' text='280+' />
            <HeroStatsCart title='HAPPY CLIENTS' text='100%' />
            <HeroStatsCart title='FOLLOWER' text='420K' />
            <HeroStatsCart title='Years Of Experience' text='10+' />
            <HeroStatsCart title='Clients' text='10+' />
        </div>
    )
}