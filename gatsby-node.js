const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
//exports.createPages = ({ actions, graphql }) => {
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

    // Get all markdown blog posts sorted by date
    const blogResult = await graphql(
      `
        {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: ASC }
            limit: 1000
          ) {
            nodes {
              id
              fields {
                slug
              }
            }
          }
        }
      `
    )
  
    if (blogResult.errors) {
      reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        blogResult.errors
      )
      return
    }
    const posts = blogResult.data.allMarkdownRemark.nodes

    exports.onCreateNode = ({ node, actions, getNode }) => {
      const { createNodeField } = actions
    
      if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
    
        createNodeField({
          name: `slug`,
          node,
          value,
        })
      }
    }

    // // Define a template for awards
    // const AboutPage = path.resolve(`./src/templates/about-page.js`)

    // // Get all markdown blog posts sorted by date
    // const awardResult = await graphql(
    //   `
    //   {
    //     allMarkdownRemark(limit: 1000) {
    //       edges {
    //         node {
    //           id
    //           fields {
    //             slug
    //           }
    //           frontmatter {
    //             tags
    //             templateKey
    //           }
    //         }
    //       }
    //     }
    //   }
    //   `
    // )
 
    // if (awardResult.errors) {
    //   reporter.panicOnBuild(
    //     `There was an error loading your about-page`,
    //     awardResult.errors
    //   )
    //   return
    // }

    // const awardPost = awardResult.data.allMarkdownRemark.nodes

    exports.onCreateNode = ({ node, actions, getNode }) => {
      const { createNodeField } = actions
    
      if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
    
        createNodeField({
          name: `slug`,
          node,
          value,
        })
      }
    }

  // Create award posts pages


  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

      // createPage({
      //   path: awardPost.fields.slug,
      //   component: awardPost,
      // })

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `)
}
  
  // return graphql(`
  //   {
  //     allMarkdownRemark(limit: 1000) {
  //       edges {
  //         node {
  //           id
  //           fields {
  //             slug
  //           }
  //           frontmatter {
  //             tags
  //             templateKey
  //           }
  //         }
  //       }
  //     }
  //   }
  // `).then((result) => {
  //   if (result.errors) {
  //     result.errors.forEach((e) => console.error(e.toString()))
  //     return Promise.reject(result.errors)
  //   }

  // const posts = result.data.allMarkdownRemark.edges

    // posts.forEach((edge) => {
    //   const id = edge.node.id
    //   createPage({
    //     path: edge.node.fields.slug,
    //     tags: edge.node.frontmatter.tags,
    //     component: path.resolve(
    //       `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
    //     ),
    //     // additional data can be passed via context
    //     context: {
    //       id,
    //     },
    //   })
    // })

//     // Tag pages:
//     let tags = []
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach((edge) => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags)
//       }
//     })
//     // Eliminate duplicate tags
//     tags = _.uniq(tags)

//     // Make tag pages
//     tags.forEach((tag) => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`

//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/templates/tags.js`),
//         context: {
//           tag,
//         },
//       })
//     })
//   })
// }

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions
// //  fmImagesToRelative(node) // convert image paths for gatsby images

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: "slug",
//       node,
//       value,
//     })
//   }
// }

