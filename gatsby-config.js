module.exports = {
  // flags: {
  //   DEV_SSR: true
  // },
  // pathPrefix: `~yamazato`,　//チェック用
  pathPrefix: `/cs/cs-edit/en`, // https://www.ieice.org/cs/cs-edit/en/
  siteMetadata: {
    title: "IEICE Communication Society Editorial Board",
    description: "The IEICE Communication Society Editorial Board governs four of the society journals; IEICE Transaction on Communications, IEICE Transactions on Communications (Japanese Edition), IEICE Communications Express (ComEX), and IEICE Bplus (Communication Society Magazine).",
    siteUrl: `https://www.ieice.org/`,
    social: {
      twitter: `ieice_EIC`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads"
      }
    },
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     indentedSyntax: true
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "uploads"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: "static"
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-purgecss`, // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    `gatsby-plugin-netlify` // make sure to keep it last in the array
  ]
};
