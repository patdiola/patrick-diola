import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <h3>Contact:</h3>
      <ul className={styles.footerLinks}>
        <li><a href="//www.linkedin.com/in/patrickdiola/" target="_blank" rel="noreferrer">@patrickdiola on LinkedIn</a></li>
      </ul>

      <h3>Git info:</h3>
      <ul className={styles.footerLinks}>
        <li><a href="//github.com/patdiola" target="_blank" rel="noreferrer">@patdiola on Git</a></li>
        <li><a href="//github.com/patdiola/patrick-diola" target="_blank" rel="noreferrer">Git Branch</a> for This Project</li>
      </ul>

      <h3>Tools used for this site:</h3>
      <ul className={styles.footerLinks}>
        <li><a href="//www.gatsbyjs.com" target="_blank" rel="noreferrer">Gatsby</a> Static Site Generator</li>
        <li><a href="//www.contentful.com" target="_blank" rel="noreferrer">Contentful</a> Headless CMS</li>
        <li><a href="//reactjs.org" target="_blank" rel="noreferrer">ReactJS</a> Javascrip Framework</li>
        <li><a href="//github.com/" target="_blank" rel="noreferrer">GitHub</a> Code Repository</li>        
        <li><a href="//nodejs.org" target="_blank" rel="noreferrer">NodeJS</a> Javascrip Server</li>
        <li><a href="//npmjs.com" target="_blank" rel="noreferrer">NPM</a> Package Manager for NodeJS</li>
        <li><a href="//code.visualstudio.com" target="_blank" rel="noreferrer">VS Code</a> Code Editor</li>
        <li><a href="//docs.microsoft.com/en-us/windows/wsl/install" target="_blank" rel="noreferrer">WSL</a> Linux Shell for Windows</li>
        <li><a href="//ubuntu.com" target="_blank" rel="noreferrer">Ubuntu</a> Linux OS Distribution</li>
        <li><a href="//trello.com" target="_blank" rel="noreferrer">Trello</a> Kanban Style Project Management</li>
        <li><a href="//www.adobe.com/products/photoshop" target="_blank" rel="noreferrer">Adobe Photoshotp</a> Visual Design</li>
      </ul>

      <div>.</div>
    </div>
  </Container>
)

export default Footer
