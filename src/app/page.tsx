import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Home :NextPage = () =>{
  return (
    <div className={styles.container}>
      <Head>
        <title> Your Name</title>
      </Head>
      <section>
        <p> your self introduction</p>
        <p> this is website</p>
      </section>

      <section>
        <h2> blog </h2>
        <ul>


        </ul>
      </section>
    </div>

  )
}
export default Home
