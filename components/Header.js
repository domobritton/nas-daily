import Link from 'next/link'
import { Image } from 'cloudinary-react'
import classnames from 'classnames'
import NavigationMenu from './NavigationMenu'

export default class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            menuOpen: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    async componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
        const shop = window.location.href.indexOf('store')
        this.setState({ body, shop })
    }

    toggleMenu() {
        const { menuOpen, body } = this.state 
        
        if (menuOpen) {
            body.classList.remove('with-overlay');
        } else {
            body.classList.add('with-overlay')
        }
    
        this.setState({
            menuOpen: !menuOpen
        })
    }

    get hamburgerMenu() {
        const { menuOpen } = this.state 

        if (!menuOpen) { return null }

        return (
            <div className="nd-menu">
                <Link href="/">
                    <div 
                        className="nd-menu-item"
                        onClick={() => { window.scrollTo(0,0);}}>
                        ABOUT
                    </div>
                </Link>
                <Link href="/team">
                    <div 
                        className="nd-menu-item"
                        onClick={() => { window.scrollTo(0,0);}}>
                        TEAM
                    </div>
                </Link>
                <Link href="/videos">
                    <div 
                        className="nd-menu-item"
                        onClick={() => { window.scrollTo(0,0);}}>
                        VIDEOS
                    </div>
                </Link>
                <Link href="/store">
                    <div 
                        className="nd-menu-item"
                        onClick={() => { window.scrollTo(0,0);}}>
                        STORE
                    </div>
                </Link>
                <Link href="/agency">
                    <div 
                        className="nd-menu-item"
                        onClick={() => { window.scrollTo(0,0);}}>
                        AGENCY
                    </div>
                </Link>

                <div className='nd-menu-footer'>
                    <Link
                        className='privacy-and-terms-link'
                        href='/privacy'
                        onClick={() => { window.scrollTo(0,0);}}
                    >
                        Privacy Policy
                    </Link>
                    <a
                        target='_blank'
                        href='https://www.facebook.com/nasdaily/'
                        className='social-icon-wrapper'
                    >
                        <Image
                        publicId="facebook_icon_v02_wk1t1d.svg"
                        className='social-icon'
                        />
                    </a>
                    <Link
                        className='privacy-and-terms-link'
                        to='/terms'
                        onClick={() => { window.scrollTo(0,0);}}
                    >
                        Terms and Conditions
                    </Link>
                </div>
            </div>
        )
    }

    get isShopPage() {
        const { shop } = this.state
        return shop > 0
    }

    get headerLogoId() {
        if (this.isShopPage) {
            return "NASDAILY_black_logo_twgpqq.png"
        } else {
            return "NASDAILY._g21um6.png"
        }
    }

    render() {
        const { menuOpen } = this.state
        return (
            <div>
                <div className={ classnames('nd-header', {'open-menu': menuOpen})}>
                    <Link href="/">
                        <a className='logo-link'>
                        <Image
                            publicId={this.headerLogoId}
                            className='logo-image'
                            />
                        </a>
                    </Link>
                    <button 
                        className={ classnames('hamburger, hamburger--3dxy', {'is-active': menuOpen}) }
                        type='button'
                        onClick={this.toggleMenu}>
                        <span className='hamburger-box'>
                        <span className='hamburger-inner'></span>
                        </span>
                        HAM
                    </button>
                    <NavigationMenu />
                    {/* { this._hamburgerMenu } */}
                </div>
                <div className='header-filler' />
            </div>
        )
    }
}
