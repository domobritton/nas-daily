import Link from 'next/link'

export default () => (
    <div className='nd-navigation'>
        <Link href="/">
            <a className='nd-navigation-item'>ABOUT</a>
        </Link>
        <Link href="/team">
            <a className='nd-navigation-item'>TEAM</a>
        </Link>
        <Link href="/videos">
            <a className='nd-navigation-item'>VIDEOS</a>
        </Link>
        <Link href="/store">
            <a className='nd-navigation-item'>STORE</a>
        </Link>
        <Link href="/agency">
            <a className='nd-navigation-item'>AGENCY</a>
        </Link>
    </div> 
)