import React from 'react'
import { graphql } from 'gatsby'
const TopPage = ({ data }) => (
  <div>
    {data.markdownRemark.frontmatter.description}
    {data.markdownRemark.frontmatter.heading}
    {data.markdownRemark.frontmatter.intro.blurbs.text}
    {data.markdownRemark.frontmatter.main.description}
    {data.markdownRemark.frontmatter.main.heading}
  </div>
)
export const query = graphql`
query HomePageQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    id
    frontmatter {
      description
      date
      heading
      intro {
        blurbs {
          text
        }
      }
      main {
        description
        heading
      }
      image {
        childrenImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;
export default TopPage;