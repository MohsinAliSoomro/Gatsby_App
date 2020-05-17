// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ForthPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page forth" />
    <h1>Hi from the forth page</h1>
    <p>Welcome to page 3 ({props.path})</p>
    <Link to="/page-2/"><p style={{marginRight:"2rem"}}>go to page 2</p></Link>
    <Link to="/page-3/"><p style={{marginRight:"2rem"}}>go to page 3</p></Link>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ForthPage
