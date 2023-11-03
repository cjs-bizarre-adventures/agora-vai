import "../cool/global.css"

export default function App ({ Component, pageProps}) {
    return (
        <>
           <p>PSEM</p>
            <Component {...pageProps}  />
            <p>Follow Us On Social Media!</p>
        </>
    )
}