import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { H1 } from '../components/Heading'

const FormulaPost = ({ data }) => {
  const { title, body, formulaImage } = data.contentfulFormulaPost;

  return (
    <Layout>
      <GatsbyImage
        image={formulaImage.gatsbyImageData}
      />
      <H1>{title}</H1>
      <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
    </Layout>
  )
}

export default FormulaPost;

export const pageQuery = graphql`
  query formulaPostQuery($slug: String!) {
    contentfulFormulaPost(slug: {eq: $slug}) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
      formulaImage {
        gatsbyImageData (
          layout: CONSTRAINED
          placeholder: BLURRED
          width: 960
        )
      }
    }
  }
`