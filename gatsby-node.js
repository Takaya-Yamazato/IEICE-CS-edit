const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
//exports.createPages = ({ actions, graphql }) => {
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagsPost = path.resolve(`./src/templates/tags.js`);

  // Get all markdown blog posts sorted by date
  const blogResult = await graphql(
    `
      {
        allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    `
  );

  if (blogResult.errors) {
    reporter.panicOnBuild(`There was an error loading your blog posts`, blogResult.errors);
    return;
  }
  const posts = blogResult.data.allMarkdownRemark.nodes;

  exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
      const value = createFilePath({ node, getNode });

      createNodeField({
        name: `slug`,
        node,
        value,
      });
    }
  };

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      // posts.forEach((post) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: post.fields.slug,
        tags: post.frontmatter.tags,
        // component: blogPost,
        component: path.resolve(`src/templates/${String(post.frontmatter.templateKey)}.js`),
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach((post) => {
    // if (_.get(post, `post.frontmatter.tags`)) {
    tags = tags.concat(post.frontmatter.tags);
    // }
  });

  // Eliminate duplicate tags
  tags = _.uniq(tags);
  // Delete null tag
  tags = tags.filter(function (e) {
    return e != null;
  });

  // Make tag pages
  tags.forEach((tag) => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag,
      },
    }); // End createPage
  }); // End Make tag pages

  createRedirect({ fromPath: "/xplore/Migration-of-EB-and-ComEX-to-IEEE-Xplore/", toPath: "/xplore/", isPermanent: true });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/xplore/)) {
//     page.matchPath = "/xplore/*";

//     // Update the page.
//     createPage(page);
//   }
// };

// // Generally you create redirects while creating pages.
// exports.createPages = ({ graphql, actions }) => {
//   const { createRedirect } = actions
//   createRedirect({ fromPath: "/xplore/Migration-of-EB-and-ComEX-to-IEEE-Xplore/", toPath: "/xplore/", isPermanent: true });
//   // Create pages here
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: String
      siteUrl: String
      social: Social
      title: String
      description: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
      html: String
    }
    type Frontmatter {
      title: String
      subtitle: String
      heading: String
      description: String
      tags: [String]
      date: Date @dateformat
      eb: Indexes
      jb: Indexes
      comex: Indexes
      bPlus: Indexes
    }
    type Fields {
      slug: String
    }
    type Indexes{
      text: String
    }
  `);
};
