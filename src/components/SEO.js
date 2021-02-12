import React from 'react'
import PropTypes from "prop-types"
import { Helmet } from 'react-helmet'
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage:image
        twitterUsername
      }
    }
  }
`
const SEO = ({ title, description, image, article, snippet, keywords }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    keywords: keywords.join(','),
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate} htmlAttributes={{ lang: 'en' }}>
      <meta name="google-site-verification" content="aS5BlTYYa6OIBC7WjfeTN_LQKKWvYXZWHvWGTyv6XAU" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.keywords && (<meta name="keywords" content={seo.keywords} />)}
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
  keywords: ['website', 'digital', 'solutions' ],
  image: null,
  article: false,
  snippet: null,
}

