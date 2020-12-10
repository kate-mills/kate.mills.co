import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import Banner from '../components/Banner'

const Thankyou = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Thank you!" info=" Your submission was received.  We'll be in contact shortly.">
          <AniLink fade to="/" className="btn btn-dark">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}

export default Thankyou

