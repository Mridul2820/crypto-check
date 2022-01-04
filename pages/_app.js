import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </RecoilRoot>
    )
}

export default MyApp
