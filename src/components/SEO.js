import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from 'gatsby'
import SchemaOrg from './SchemaOrg'

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        baseUrl
        defaultImage:image
        twitterUsername
        dateModified
        organization{
          name
          url
          logo
          priceRange
          telephone
        }
      }
    }
  }
`
const SEO = ({ title, description, image, article, snippet}) => {
  const {pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    baseUrl,
    defaultImage,
    twitterUsername,
    organization,
    dateModified,
  } = site.siteMetadata


  const seo = {
    title: title || defaultTitle,
    dateModified: dateModified,
    description: description || defaultDescription,
    image: `${baseUrl}/${image || defaultImage}`,
    url: `${baseUrl}${pathname}`,
  }

  return (
    <React.Fragment>
      <Helmet title={seo.title}
        titleTemplate={(seo.title.length < 46) && titleTemplate}
        htmlAttributes={{ lang: 'en' }}
      >
      <meta name="google-site-verification" content="aS5BlTYYa6OIBC7WjfeTN_LQKKWvYXZWHvWGTyv6XAU" />
      <meta name="p:domain_verify" content="f1fa26b212532759ecbfbc6161fde057"/>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {snippet && (<script type="application/ld+json">{snippet}</script>)}

      {/* facebook card */}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {article ? <meta property="og:type" content="article" />:<meta property="og:type" content="website" /> }
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && <meta property="og:description" content={seo.description}/>}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />

      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && ( <meta name="twitter:creator" content={twitterUsername} />)}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && ( <meta name="twitter:description" content={seo.description} />)}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>

    <SchemaOrg
      compoundTitle={`${seo.title} | Ally Digital Solutions`}
      defaultTitle={'Ally Digital Solutions'}
      pageTitle={seo.title}
      description={seo.description}
      baseUrl={baseUrl}
      image={seo.image}
      dateModified={dateModified}
      organization={organization}
    />
    </React.Fragment>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  snippet: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  snippet: null,
}

