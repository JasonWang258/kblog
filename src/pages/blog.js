import React from "react"
import { graphql } from "gatsby"
import Link from "@components/Link"
// import { Button } from "@material-ui/core"
import Bio from "@components/bio"
import Layout from "@components/layout"
import SEO from "@components/seo"
import { rhythm } from "@utils/typography"
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import clsx from 'clsx'
import styles from '@assets/jss/views/components.js'
import { makeStyles } from '@material-ui/core/styles'
import Parallax from '@components/Parallax/Parallax'

const useStyles = makeStyles(styles)

const Blog  = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const classes = useStyles()
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <Parallax
        filter
        image={require("@assets/img/landing-bg.jpg")}
        style={{ height: "280px" }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <Bio />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={clsx(classes.main, classes.mainRaised)}  style={{ marginTop: "-80px" }}>
        <div className={classes.container}>
          <div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: `none` }}
                      to={`/blog${node.fields.slug}`}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
