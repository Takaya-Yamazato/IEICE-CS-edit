import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Recommendation = ({ data, location }) => {
    const post = data.markdownRemark
    const siteTitle = data.site.siteMetadata?.title || `Title`

return (
  <Layout location={location} title={siteTitle}>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <article
      className="blog-post"
      itemScope
      itemType="http://schema.org/Article"
    >
      <header>
        <h1 itemProp="headline">{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
      </header>
      {/* <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      /> */}
        <section className="section">
          <div className="container">
            <div className="content">
            {post.html}
            </div>
          </div>
        </section>


    </article>
  </Layout>
)
}

export default Recommendation

// const Recommendation = ({ data }) => (
//     <Layout>
//     <div>
//     {data.markdownRemark.frontmatter.title}
//     {data.markdownRemark.frontmatter.templateKey}
//     {data.markdownRemark.frontmatter.path}
//     {data.markdownRemark.fields.slug}
//     </div>
//     {data.markdownRemark.html}
//     </Layout>
// )
export const query = graphql`
query RecommendationQuery {
    site {
        siteMetadata {
          title
        }
      }
    markdownRemark(frontmatter: {templateKey: {eq: "recommendations"}}) {
        id
        excerpt(pruneLength: 160)
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        html
      }
    }
`;
// export default Recommendation;