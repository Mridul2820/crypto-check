import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Navbar />
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
