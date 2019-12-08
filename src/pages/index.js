import React from "react"
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Beenhere } from '@material-ui/icons'
import clsx from 'clsx'
import Layout from '@components/layout'
import SEO from '@components/seo'
import Link from '@components/Link'
import Parallax from '@components/Parallax/Parallax'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import Button from '@components/CustomButtons/Button'
import styles from '@assets/jss/views/components.js'

const useStyles = makeStyles(styles)

const IndexPage = (props) => {
  const { data } = props
  const posts = data.allMdx.edges
  const siteTitle = `Eason's Story Book`
  const classes = useStyles()
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `story`]}
      />
      <Parallax filter image={require("@assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h2 className={classes.title}>{siteTitle}</h2>
                <h2>
                  Hey my friends{" "}
                  <span role="img" aria-label="wave emoji">
                    👋
                  </span>
                </h2>
                <p>Welcome to Eason's story book website.</p>
                <Link to="/blog" underline="none">
                  <Button
                    variant="contained"
                    color="success"
                    className={classes.button}
                    endIcon={<Beenhere />}
                  >Check it out</Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h4>Top 3 New Stories:</h4>
          <hr/>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3>
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
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
