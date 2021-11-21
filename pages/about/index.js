import Link from 'next/link'
import useSWR from 'swr'

import Header from '../components/header'
import Content from '../components/content'

const fetcher = url => fetch(url).then(r => r.json())

export default function About() {
    const {data,error} = useSWR('/api/hello', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    return (
        <>
            <Header title={'ABOUT'}></Header>
            <h1>About Page</h1>
            <p>{data.name}</p>
            <Link href={'/'}><button>TOP</button></Link>
            <Link href={'/about'}><button>ABOUT</button></Link>
            <Content></Content>
        </>
    )
}