import React from 'react'
import  navLinks from '../../constants/links'
import { Helmet } from 'react-helmet'

export default React.memo(
  ({
    url,
    compoundTitle,
    defaultTitle,
    pageTitle,
    image,
    description,
    baseUrl,
    author,
    organization,
    dateModified,
  }) => {
  const linkCrumbs = navLinks.map(link => {
      return {
        type: 'ListItem',
        name: link.page,
        position: link.id,
        item: `${baseUrl}${link.path}`,
        image,

      }
    })
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": organization.url,
        description: organization.description,
        email: organization.email,
        image: image,
        logo: organization.logo,
        name: organization.name,
        priceRange: organization.priceRange,
        sameAs: organization.otherUrls,
        telephone: organization.telephone,
        url: organization.url,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        name: 'navigation',
        itemListElement: linkCrumbs,
      },
    ]


    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)

