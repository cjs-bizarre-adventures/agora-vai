import Link from 'next/Link'
import styles from "../cool/post.module.css"

export default function Psem (){
    return (
        <>
            <h1>Welcome to PSEM!</h1>
            <p>We are a team of students of Instituto Superior técnico and we build highly efficient cars to compete in greenpower races! We have won the Goodwood International Final in 2023!</p>
            <Link className ={styles.button} href="/garage">Check Out our Garage!</Link>
            <p></p>
            <Link className ={styles.button} href="/aboutus">Check Out our History!</Link>
        </>
    )
}