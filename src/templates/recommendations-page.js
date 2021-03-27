import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Content, { HTMLContent } from '../components/Content'

export default function RecommendationsPage() {
  const data = useStaticQuery(graphql`

  query recommendationsPageQuery {
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
  `)

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
   <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {post.frontmatter.title}
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

// export const RecommendationsPageTemplate = ({ title, content, contentComponent }) => {
//   const PageContent = contentComponent || Content

//   return (
//     <section className="section section--gradient">
//       <div className="container">
//         <div className="columns">
//           <div className="column is-10 is-offset-1">
//             <div className="section">
//               <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
//                 {title}
//               </h2>
//               <PageContent className="content" content={content} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// RecommendationsPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// }

// const RecommendationsPage = ({ data }) => {
//   const { markdownRemark: post } = data

//   return (
//     <Layout>
//       <RecommendationsPageTemplate
//         contentComponent={HTMLContent}
//         title={post.frontmatter.title}
//         content={post.html}
//       />
//     </Layout>
//   )
// }

// RecommendationsPage.propTypes = {
//   data: PropTypes.object.isRequired,
// }

// export default RecommendationsPage

// export const RecommendationsPageQuery = graphql`
//   query RecommendationsPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
