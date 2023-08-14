import type {NextPage} from 'next'
import Head from 'next/head'
import homeStyles from '../../styles/Home.module.css'

const Home :NextPage = () =>{
  return (
    <div>
      <Head>
        <title> Your Name</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p> your self introduction</p>
        <p> this is website</p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}> blog </h2>
        <ul className={homeStyles.list}>


        </ul>
      </section>
    </div>

  )
}
export default Home
