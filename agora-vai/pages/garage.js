import Link from 'next/Link'
import styles from "../cool/post.module.css"

export default function Garage (){
    return (
        <>
            <h1>Check Out Our Cars! </h1>
            <h2>The GP21</h2>
            <p>The start of a new era!</p>
            <Link className ={styles.button} href="/GP21">Learn more about it here!</Link>
            <p></p>
            <h2>The GP23</h2>
            <p>The Champion of the Goodwood International Final 2023! </p>
            <Link className ={styles.button} href="/GP23">Learn More About it Here!</Link>
        </>
    )
}