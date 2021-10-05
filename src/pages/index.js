import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import React from "react"
import Layout from '../components/Layout'
import {header, btn} from '../styles/home.module.css'


export default function Home({ data }) {
  console.log('data', data)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & deploy</h3>
          <p>UX designer & Web developer based in leicester</p>
          <Link to='/projects'className={btn}>My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
    )
}

// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         copyright
//         description
//         title
//       }
//     }
//   }
// `


export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`