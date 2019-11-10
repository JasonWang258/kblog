import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Eason's Writing"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`story`, `book`, `javascript`, `react`]}
        />
        <img style={{ margin: 0, height: "300px" }} src="./bg.svg" alt="bg" />
        <h2>
          Hey my friends{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h2>
        <p>Welcome to Eason's story book website.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Check it out</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
