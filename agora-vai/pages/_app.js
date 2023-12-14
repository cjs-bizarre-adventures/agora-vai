import "../cool/global.css"
import Link from 'next/Link'
import {useRouter} from 'next/router'

export default function App ({ Component, pageProps}) {
    const router = useRouter ()
    return (
        <>
           <div>
                <div class ="banner">
                    <h1> P     S     E     M </h1>
                </div>
            <nav className="header-nav">
                <ul>
                    <li>
                        <Link className= {router.pathname == "/" ? "active": ""} href="/">Home</Link>
                    </li>
                    <li>
                        <Link className= {router.pathname == "/garage" ? "active": ""} href="/garage">Garage</Link>
                    </li>
                    <li>
                        <Link className= {router.pathname == "/aboutus" ? "active": ""} href="/aboutus">About Us</Link>
                    </li>
                </ul>
            </nav>
           </div>
            <Component {...pageProps}  />
            <div>
            <h3>Follow Us On Social Media!</h3>
            <nav className="site-footer">
                <ul>
                     <li>
                        <Link  href="https://www.instagram.com/psem_portugal">Instagram</Link>
                    </li>
                    <li>
                        <Link  href="https://www.facebook.com/psem.ist">Facebook</Link>
                    </li>
                    <li>
                        <Link  href="https://twitter.com/psem_portugal">X / Twitter</Link>
                     </li>
                    <li>
                        <Link  href="https://www.linkedin.com/company/psem">Linkedin</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </>
    )
}