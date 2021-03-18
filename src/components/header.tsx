import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className="flex bg-white border-b border-gray-200 h-16 items-center"
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="m-0 mx-auto"
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        className="m-0 text-3xl"
      >
        <Link
          className="text-navy-700"
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
