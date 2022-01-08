import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

// Components
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollTop from '../components/ScrollTop'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Navbar />
            <ScrollTop />
            <Component {...pageProps} />
            <Footer />
        </RecoilRoot>
    )
}

export default MyApp
