import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

// SEO
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </RecoilRoot>
    )
}

export default MyApp
