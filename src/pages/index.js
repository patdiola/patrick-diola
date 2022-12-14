import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Hero
          image={author.heroImage.gatsbyImage}
          title={author.name}
          content={author.shortBio}
        />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(
      sort: { fields: [createdAt], order: DESC }
      limit: 3
      ) {
      nodes {
        title
        slug
        tags
        createdAt
        heroImage {
          url
          gatsbyImage(
            layout: FULL_WIDTH
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
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 1280
            quality: 80
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
