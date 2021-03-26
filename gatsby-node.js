const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              created
              updated
              slug
              tags
            }
            html
            rawMarkdownBody
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const articleTemplate = path.resolve(`src/templates/articleTemplate.tsx`)
  result.data.allMarkdownRemark.edges.forEach(edge => {
    const node = edge.node
    const frontmatter = node.frontmatter
    createPage({
      path: `/articles/${frontmatter.slug}`,
      component: articleTemplate,
      context: {
        metaData: frontmatter,
        rawMarkdownBody: node.rawMarkdownBody
      },
    })
  })
}
