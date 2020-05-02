import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/items.module.css'

const getPosts = graphql`
  {
    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          published(formatString: "MMMM Do, YYYY")
          slug
          title
        }
      }
    }
  }
`
const BlogList = () => {
  const { posts } = useStaticQuery(getPosts)
  return (
    <section className={styles.blog}>
      <div className={styles.center}>
        <Title title="our" subtitle="blogs" />
        {posts.edges.map(({ node }) => {
          return <BlogCard post={node} key={node.id} />
        })}
      </div>
    </section>
  )
}

export default BlogList
