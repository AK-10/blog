import * as React from "react"
import Layout from "../components/layout"
import ReactMarkDown from "react-markdown"

function Article({ pageContext }) {
  const { metaData, rawMarkdownBody } = pageContext
  return (
  <Layout>
    <div className="prose">
      <h1>{metaData.title}</h1>
      <p>作成: {metaData.created}</p>
      <p>最終更新: {metaData.updated}</p>
    </div>
    <ReactMarkDown
      className="prose py-6"
      children={ rawMarkdownBody }
    />
  </Layout>
  )
}

export default Article
