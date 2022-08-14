import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [page] = get(this, 'props.data.allContentfulPage.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title={page.title} />
        <Hero 
          title={page.title}
          content={page.description}
        />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulPage(filter: {slug: {eq: "portfolio"}}) {
      nodes {
        slug
        title
        description {
          raw
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [createdAt], order: DESC }) {
        nodes {
        title
        slug
        tags
        createdAt
        heroImage {
          url
          gatsbyImage(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        heroImageContain
        description {
          raw
        }
      }
    }
  }
`
