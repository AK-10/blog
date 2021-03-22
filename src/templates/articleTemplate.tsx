import * as React from "react"

function Article({ pageContext }) {
  const { metaData } = pageContext
  return (
    <div>
      title: {metaData.title}
      created: {metaData.created}
      updated: {metaData.updated}
    </div>
  )
}

export default Article
