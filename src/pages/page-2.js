import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from About page</h1>
    <p>Welcome About page</p>
    <Link to="/">Back to the homepage</Link>
  </Layout>
)

export default SecondPage
