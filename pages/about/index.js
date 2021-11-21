import Link from 'next/link'

import Header from '../components/header'

export default function About() {
    return (
        <>
            <Header title={'ABOUT'}></Header>
            <h1>About Page</h1>
            <Link href={'/'}><button>TOP</button></Link>
            <Link href={'/about'}><button>ABOUT</button></Link>
        </>
    )
}