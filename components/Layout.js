import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { CloudinaryContext } from 'cloudinary-react'
import './stylesheets/application.scss'

export default ({children, title=''}) => (
    <React.Fragment>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>{ title }</title> 
        </Head>
        <CloudinaryContext cloudName="nasdaily">
            <Header />
            {children}
            <Footer />
        </CloudinaryContext>
    </React.Fragment>
    
)
