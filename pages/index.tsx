import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Login from './login';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Login/>
    </div>
  )
}

export default Home
