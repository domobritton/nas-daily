import { Image } from 'cloudinary-react'
import Link from 'next/link'

export default class Footer extends React.Component {
  render() {

    return (
      <div className='nd-footer'>
        <Image publicId="NASDAILY._white_w6czgq.svg" className='logo'/>
        <div className='navigation'>
            <Link href='/'>
                <a className='navigation-link'>About</a>  
            </Link>
            <Link href='/videos'>
                <a className='navigation-link'>Videos</a>
            </Link>
            <Link href='/store'>
                <a className='navigation-link'>Store</a>
            </Link>
            <Link href='/agency'>
                <a className='navigation-link'>Agency</a>
            </Link>
            <Link href='/team'>
                <a className='navigation-link'>Team</a>
            </Link>
        </div>
        <div className='social-list-header'>Only on:</div>
        <ul className='social-list'>
          <li>
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
          </li>
        </ul>
        <div className='subfooter'>
          Made around the world. All content copyright @ 2017 NasDaily, Inc
          <div className='privacy-and-terms'>
            <div>
              <Link href='/privacy'>
                <a className='privacy-and-terms-link'>Privacy Policy</a>
              </Link>
            </div>
            <div>
              <Link href='/terms'>
                <a className='privacy-and-terms-link'>Terms and Conditions</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}