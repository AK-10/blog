import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1
      className="text-2xl sm:text-3xl md:text-4xl font-medium text-navy-700"
    >
      404: Not Found
    </h1>
    <p
      className="mt-3 text-navy-500"
    >
      残念！ないものはないよ！
    </p>
  </Layout>
)

export default NotFoundPage
