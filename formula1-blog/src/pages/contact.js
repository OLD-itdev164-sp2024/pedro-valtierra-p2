import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Contact = ({ data }) => {
  const { name, company, address } = data.site.siteMetadata.contact
  return (
      <Layout>
        <Seo title="Contact Us" />
        
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: `1.45rem` }}>
          <StaticImage 
            src="../images/gatsby-icon.png"
            width={50} // Adjust image width as needed
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby blog"
            style={{ marginRight: `20px`, borderRadius: '50%' }} // Apply margin and border-radius
          />
          <h1>Contact Us</h1>
        </div>   
        <p>Please send all inquiries to: </p>
        <div>{company}</div>
        <div>{`C/O ${name}`}</div>
        <div>{address}</div>
        <div><Link to="/">Home</Link></div>
      
        
      </Layout>
  )
}
export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
        }
      }
    }
  }
`