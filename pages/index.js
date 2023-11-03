import Link from 'next/Link'

export default function Psem (){
    return (
        <>
            <h1>Welcome to PSEM!</h1>
            <p>We are a team of students of Instituto Superior técnico and we build highly efficient cars to compete in greenpower races! We have won the Goodwood International Final in 2023!</p>
            <Link href="/garage">Check Out our Garage!</Link>
            <p></p>
            <Link href="/aboutus">Check Out our History!</Link>
        </>
    )
}