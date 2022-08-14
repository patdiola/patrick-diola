# Patrick Diola Portfolio Site

A [Gatsby](http://gatsbyjs.com/) static site powered by [Contentful](https://www.contentful.com).

## Features

- Contentful [Synchronization Feature](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization)
- Contentful [Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- Responsive/adaptive images via [gatsby-plugin-image](https://www.gatsbyjs.org/packages/gatsby-plugin-image/) and the Gatsby [Images API](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/synchronization/initial-synchronization-of-entries-of-a-specific-content-type).
- [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

## Getting started

Getting started with Contentful: [official Contentful getting started guide](https://www.contentful.com/developers/docs/tutorials/general/get-started/).

### Get the source code and install dependencies.

Known compatibilities:
- node v16.0.0

```
$ git clone https://github.com/patdiola/patrick-diola
$ npm install
``` 

### Set up of the needed content model and create a configuration file

Add Contentful API environment variables to .env.development and .env.production ***MAKE SURE THESE FILES ARE IN .gitignore DO NOT COMMIT THESE TO GIT***

.gitignore
```
# dotenv environment variables file
.env*
```

## Crucial Commands

### `npm run dev`

Run the project locally with live reload in development mode.

### `npm run build`

Run a production build into `./public`. The result is a static site ready to deploy to a production server.

### `npm run serve`

Spin up a production-ready server with your blog. Don't forget to build your page beforehand.