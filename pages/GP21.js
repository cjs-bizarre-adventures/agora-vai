import Link from 'next/Link'
import styles from "../cool/post.module.css"

export default function Garage (){
    return (
        <>
            <h1>The GP21</h1>
            <div>
                <img src="https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=1ef9c534-73d2-41df-b4c0-55e98874a61f" alt="GP21"></img>
                <span>The GP21, as featured in an article by Diário de Notícias</span>
            </div>
            <p>GP21, otherwise known as 'Phoenix', brought a new era into PSEM. It was designed with a focus on lightweight construction and enhanced aerodynamic efficiency. Although its initial design work began in early 2020, the pandemic delayed its debut until September 2022. GP21 has demonstrated significant improvements compared to its predecessors and has also earned recognition with impressive achievements: securing two third-place finishes at the Greenpower races in Aintree and Dunsfold, a 1st place at the Iberian Final in Navarra Circuit, and a 5th place at the International Final in Goodwood. Some of the newest features implemented include the integration of a robust telemetry system and advanced software development, enabling more efficient data collection and analysis. This valuable capability has helped us acknowledge what works and the areas that require further improvement. It weighs in at 64 kg andhas raced 10 times</p>
            <h3>Track record:</h3>
            <p>Dunsfold 2021: 3rd</p>
            <p>Aintree 2021: 3rd </p>
            <p>Iberian Final 2021 (Navarra Circuit): 1st</p> 
            <p>Goodwood International Final 2021: 5th</p>
            <p></p>
            <Link className ={styles.button} href="/garage">Go Back</Link>
        </>
    )
}