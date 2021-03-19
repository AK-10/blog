/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data: any = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle: string = data.site.siteMetadata?.title || `Title`

  return (
    <div
      className="flex flex-col min-h-screen bg-gray-50"
    >
      <Header siteTitle={ siteTitle } />
      <div
        className="flex-grow"
      >
        <main
          className="bg-gray-50 w-full mx-auto"
        >
          <div
            className="max-w-prose container mx-auto py-4"
          >
            {children}
          </div>
        </main>
      </div>
      <footer
        className="flex text-navy-700 w-full border-t"
      >
        <div
          className="m-0 mx-auto max-w-screen-lg"
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
