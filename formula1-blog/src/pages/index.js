import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Box, Card, Heading } from 'rebass'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const Grid = styled(Box)`
  background-color: black;
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`

const Body = styled.body`
  background-color: black;
`;

const IndexPage = ( {data} ) => (
  <Body>
  <Layout>
    <Grid width={[1, 2/3, 7/8]} p={2} className={styles.list}>
    {
      data.allContentfulFormulaPost.edges.map(edge => (
        <Card key={edge.node.id}>
          <Link to={edge.node.slug}>
            <GatsbyImage
              image={edge.node.formulaImage.gatsbyImageData}
            />
          </Link>
          <Heading>
            {edge.node.title}
          </Heading>
          <div>
            {edge.node.body.childMarkdownRemark.excerpt}
          </div>
        </Card>
      ))
    }
    </Grid>
  </Layout>
  </Body>
)


export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{
  allContentfulFormulaPost {
    edges {
      node {
        id
        title
        slug
        body {
          childMarkdownRemark {
            excerpt
          }
        }
        formulaImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 600
          )
        }
      }
    }
  }
}
`