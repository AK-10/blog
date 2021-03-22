import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import { ItemMeta } from "../types/itemMeta"
import { ListItem } from "../components/listItem"

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___created }, limit: 10) {
      edges {
        node {
          frontmatter {
            title
            created
            updated
            slug
            tags
          }
        }
      }
    }
  }
`

function itemMetaFromEdge(edge: any): ItemMeta {
  const item = edge.node.frontmatter

  return new ItemMeta(item.title, item.created, item.updated, item.tags, item.slug)
}

const IndexPage = () => {
  const data = useStaticQuery(indexQuery)
  console.log(data.allMarkdownRemark.edges)
  const itemMetas: Array<ItemMeta> = data.allMarkdownRemark.edges.map(itemMetaFromEdge)

  return (
    <Layout>
      <SEO title="Home" />
      <div
        className=""
      >
        {
          itemMetas.map((item) => ListItem(item))
        }
      </div>
    </Layout>
  )
}

export default IndexPage

