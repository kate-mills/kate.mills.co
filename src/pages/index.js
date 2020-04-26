import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SimpleHero from '../components/SimpleHero'
import Banner from '../components/Banner'

export default () => ( 
  <Layout>
    <SimpleHero>
      <Banner title="continue expoloring"
              info=" I'm baby tumblr 8-bit hella kickstarter, Single-origin coffee raclette tacos yr asymmetrical narwhal.">
        <Link className="btn-white" to="/tours">explore tours</Link>
      </Banner>
      </SimpleHero>
  </Layout>
)
