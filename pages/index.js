import styles from '../styles/Home.module.css'
import Styles from '../styles/index.module.css'
import Link from 'next/link'
import useSWR from 'swr'

import Header from './components/header'
import Content from './components/content'

let title = 'TestSite'

const fetcher = url => fetch(url).then(r => r.json())

export default function Home() {
  const {data,error} = useSWR('/api/hello', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <>
      <Header title={'TOP'}></Header>
      <h1 className={Styles.mytitle}>tesuto</h1>
      <p>このページはテストです。これからnext.js頑張ります！</p>
      <p>{data.name}</p>
      <Link href={'/'}><button>TOP</button></Link>
      <Link href={'/about'}><button>ABOUT</button></Link>
      <Content></Content>
    </>
  )
}