import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import {portfolio} from '../../styles/projects.module.css'
import { projectStyles } from '../../styles/projects.module.css'
import Img from 'gatsby-image'

export default function Projects({data}) {
    console.log('projects', data)

    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    return (
    <Layout>
        <div className={portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects & Websites</h3>
            <div className={projectStyles}>
                {projects.map(project => (
                    <Link to={'/projects/' + project.frontmatter.slug} key={project.id}>
                        <div>
                            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
                            <h3>{project.frontmatter.title}</h3>
                            <p>{ project.frontmatter.stack}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <p>Like what you see email me at: {contact} for a quote</p>
        </div>
    </Layout>
    )
}

export const query = graphql`
query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`