import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
  const { name, company } = data.site.siteMetadata.contact
  return (
      <Layout>
        <Seo title="About Us" />

        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: `1.45rem` }}>
          <StaticImage 
            src="../images/gatsby-icon.png"
            width={50} // Adjust image width as needed
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby blog"
            style={{ marginRight: `20px`, borderRadius: '50%' }} // Apply margin and border-radius
          />
          <h1>About Us</h1>
        </div>   
       
        <p>{`${company} was started by ${name} in 2024.`}</p>
        <p>{`At ${company} we just make blogs!`}</p>
      
        <Link to="/">Home</Link>
      </Layout>
  )
}

export default About

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`