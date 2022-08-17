import React from 'react'
import { Link } from 'gatsby'
// import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'
import { useLocation } from '@reach/router';

const ArticlePreview = ({ posts }) => {
  const location = useLocation();

  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <div className={styles.heading}>
        <h2 className={styles.title}>Featured Work</h2>
      </div>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                <div>
                  <img
                    alt=""
                    className={`${styles.previewImage} ${post.heroImageContain ? styles.previewImageContain : ''}`}
                    src={`${post.heroImage.url}?w=600&q=80`} />
                </div>
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div className={styles.meta}>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
      
      {location.pathname === '/' &&
        <div className={styles.viewMore}>
          <Link to={`/blog`}>View More</Link>
        </div>
      }
    </Container>
  )
}

export default ArticlePreview
