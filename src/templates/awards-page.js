import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'

export default function AwardsPageTemplate() {
  const data = useStaticQuery(graphql`

  query awardPageQuery {
      site {
          siteMetadata {
            title
          }
        }
      markdownRemark(frontmatter: {templateKey: {eq: "awards"}}) {
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
  `)

  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
   <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {post.frontmatter.title}
              {/* {siteTitle} */}
              </h2>
              <div className="content" dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </div>
      </div>
    </section>
   </Layout>
  )
}

AwardsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  // contentComponent: PropTypes.func,
}

// const AwardsPage = ({ data }) => {
//   const { markdownRemark: post } = data

//   return (
//     <Layout>
//       <AwardsPageTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         content={post.html}
//       />
//     </Layout>
//   )
// }

// AwardsPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default AwardsPage

// export const awardsPageQuery = graphql`
//   query AwardsPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
