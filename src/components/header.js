import * as React from "react"
import PropTypes from "prop-types"
import { downloadButtonStyle } from './stylesheet';

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 50px'
      }}
    >
      <h3 style={{ color: 'white', backgroundColor:'black',padding:'10px' }}>Motivation Videos</h3>
      <button style={downloadButtonStyle}>
        <a target="_blank" href="https://github.com/PatrickNiyogitare28/motivation-videos/archive/refs/tags/v1.0.4.zip"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Download
        </a>
      </button>
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
