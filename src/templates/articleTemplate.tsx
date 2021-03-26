import * as React from "react"
import Layout from "../components/layout"
import ReactMarkDown from "react-markdown"

function Article({ pageContext }) {
  const { metaData, rawMarkdownBody } = pageContext
  return (
    <Layout>
      <div
        className="flex flex-col border-b border-navy-100"
      >
        <p
          className="mx-auto"
        >
          posted: {metaData.created} | updated: {metaData.updated}
        </p>
        <h1
          className="my-2 text-3xl mx-auto"
        >
          {metaData.title}
        </h1>
      </div>

      <ReactMarkDown
        className="prose py-6"
        children={ rawMarkdownBody }
      />
    </Layout>
  )
}

export default Article
