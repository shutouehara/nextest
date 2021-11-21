import styles from '../styles/Home.module.css'
import Styles from '../styles/index.module.css'
import Link from 'next/link'

import Header from './components/header'

export default function Home() {
  return (
    <>
      <Header title={'TOP'}></Header>
      <h1 className={Styles.mytitle}>tesuto</h1>
      <p>このページはテストです。これからnext.js頑張ります！</p>
            <Link href={'/'}><button>TOP</button></Link>
            <Link href={'/about'}><button>ABOUT</button></Link>
    </>
  )
}