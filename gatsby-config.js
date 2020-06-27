module.exports = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `Abdoul Salam Ally`,
    description: `Software Engineer. Abdoul Salam Ally's personal website.`,
    author: `Abdoul Salam Ally <abdoulsalamally@gmail.com>`,
    siteUrl: `https://abdoulsalamally.github.io/portfolio`,
    siteLanguage: `en`,
    ogLanguage: `en`,
    headline: `Abdoul Salam Ally`,
    twitter: `@abdoulsalamally`,
    facebook: `abdoulsalamally`,
    banner: `/src/images/favicon.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Abdoul Salam Ally`,
        short_name: `AbdSalam`,
        start_url: `/`,
        background_color: `#0a192f`,
        theme_color: `#0a192f`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID || "none",
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GOOGLE_TAG_MANAGER_ID || "none",
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    }
  ],
}
