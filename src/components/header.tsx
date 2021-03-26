import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    className="px-6 md:px-0 py-1 bg-navy-500 items-center max-w-screen"
  >
    <div
      className="m-0 mx-auto py-2 max-w-prose flex flex-row justify-between"
    >
      <h1
        className="m-0"
      >
        <Link
          className="text-white text-2xl"
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
