'use client'
import { usePathname } from "next/navigation"
import Link from "next/link";
import Image from "next/image";
import '../styles/header.css'

export default function Header() {
    const pathName = usePathname();
    

    return (
        <header>
            <nav className="header-navigation">
                <Link href='/'>
                <Image className="nav-logo" width={130} height={24} src="/Logo.png" alt="Logo" priority />
                </Link>
                <ul className="nav-list-cnt">
                    <li className="nav-link-item"><Link className={`${pathName === '/' && 'activeLink' } nav-link`} href={'/'}>HOME</Link></li>
                    <li className="nav-link-item"><Link className={`${pathName === '/services' && 'activeLink' } nav-link`} href={'/services'}>SERVICES</Link></li>
                    <li className="nav-link-item"><Link className={`${pathName === '/projects' && 'activeLink' } nav-link`} href={'/projects'}>PROJECTS</Link></li>
                    <li className="nav-link-item"><Link className={`${pathName === '/about' && 'activeLink' } nav-link`} href={'/about'}>ABOUT</Link></li>
                    <li className="nav-link-item"><Link className={`${pathName === '/carers' && 'activeLink' } nav-link`} href={'/carers'}>CARERS</Link></li>
                    <li className="nav-link-item"><Link className={`${pathName === '/blog' && 'activeLink' } nav-link`} href={'/blog'}>BLOGS</Link></li>
                    <li className="nav-link-item"><Link className={`${pathName === '/contact' && 'text-red-300' } nav-link`} href={'/contact'}>CONTACT US</Link></li>
                </ul>
                <button className="menu-button">
                    <Image className="Menu-button" width={24} height={24} src="/MenuIcon.png" alt="Logo" priority /> 
                </button>
            </nav>
        </header>
    )
}