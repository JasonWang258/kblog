import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Typography } from '@material-ui/core'
import Link from '@components/Link'
import Bio from '@components/bio'
import Layout from '@components/layout'
import SEO from '@components/seo'
import Comments from '@components/comments'
import { rhythm } from '@utils/typography'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import clsx from 'clsx'
import styles from '@assets/jss/views/components.js'
import { makeStyles } from '@material-ui/core/styles'
import Parallax from '@components/Parallax/Parallax'
import Card from "@components/Card/Card.js"
import CardBody from "@components/Card/CardBody.js"
import CardHeader from "@components/Card/CardHeader.js"
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(styles)

const BlogPostTemplate = (props) => {
  const classes = useStyles()
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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
      <div className={clsx(classes.main, classes.mainRaised)}  style={{ marginTop: "-80px", backgroundColor: "#efefcf" }}>
        <div className={classes.container}>
          <Typography variant="h4" component="h3" style={{
              marginTop: rhythm(1),
            }}>{post.frontmatter.title}</Typography>
          <Typography component="p">
            {post.frontmatter.date}
          </Typography>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr />
          <container>
            <Comments />
          </container>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {previous && (
              <Card>
                <CardHeader style={{ padding: "10px", backgroundColor: "#afdfef"}}>
                  <span role="img" aria-label="previous">◀️</span> Previous Story
                </CardHeader>
                <CardBody>
                    <Link to={`/blog${previous.fields.slug}`} rel="prev">
                      {previous.frontmatter.title}
                    </Link>
                </CardBody>
              </Card>
              )}
            </Grid>
            <Grid item xs={6}>
              {next && (
              <Card>
                <CardHeader style={{ padding: "10px", backgroundColor: "#afdfef"}}>
                  Next Story <span role="img" aria-label="next">▶️</span>
                </CardHeader>
                <CardBody>
                    <Link to={`/blog${next.fields.slug}`} rel="next">
                      {next.frontmatter.title}
                    </Link>
                </CardBody>
              </Card>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
