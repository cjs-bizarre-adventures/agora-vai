import Link from 'next/Link'
import styles from "../cool/post.module.css"

export default function Gp23 (){
    return (
        <>
            <h1>The GP23</h1>
            <div>
                <img src="https://tecnico.ulisboa.pt/files/2023/10/estudantes-do-t-cnico-sagram-se-campe-es-internacionais-em-competi-o-de-carros-el-tricos-1140x641.jpg" alt="Our team with the GP23"></img>
                <span>Our team alongside the GP23</span>
            </div>
            <p>GP23 was created using the same molds as GP21, but that is where the similarities end. Designed and built in 2023, this car features a new chassis, transmission, and telemetry systems. Improving on what we learned in the manufacturing of its older brother, GP21, GP23 is undoubtedly the best car we have ever built. It's track record is almost perfect, with 3 wins and 1 DNF in 4 races, including victory in the most important race of them all: the 2023 International Final. These results led the team to its first Greenpower Formula 24+ Championship, in our 10th anniversary of competing in Greenpower.  </p>
            <p></p>
            <h3>Track record:</h3>
            <p> Dunsfold 2023: 1st</p>
            <p>Aintree 2023: 1st </p>
            <p>Castle Combe 2023: DNF</p> 
            <p>Goodwood International Final 2023: 1st</p>
            <p></p>
            <p>It has raced 5 times and it weighs in at 62.5Kg</p>
            <Link className ={styles.button} href="/garage">Go Back</Link>
        </>
    )
}