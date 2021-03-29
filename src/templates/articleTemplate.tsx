import * as React from "react"
import Layout from "../components/layout"
import ReactMarkDown from "react-markdown"
import SEO from "../components/seo"

function Article({ pageContext }) {
  const { metaData, rawMarkdownBody } = pageContext
  return (
    <Layout>
      <SEO title={metaData.title}/>
      <div
        className="flex flex-col border-b border-navy-100"
      >
        <p
          className="mx-auto text-navy-500 text-center"
        >
          posted: {metaData.created} | updated: {metaData.updated}
        </p>
        <h1
          className="my-2 text-3xl sm:text-4xl md:text-5xl text-center mx-auto font-medium text-navy-700 leading-normal"
        >
          {metaData.title}
        </h1>
      </div>

      <ReactMarkDown
        className="prose prose-indigo py-6"
        children={ rawMarkdownBody }
      />
    </Layout>
  )
}

export default Article
