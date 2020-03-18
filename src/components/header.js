import { Link } from "gatsby"
import React from "react"
import "../components/scss/layout.scss"
import NavLinks from './NavLinks'

const Header = ({ siteTitle }) => {

return (
  <header className='navbar-header'>
    <div className='navbar-shape'>

    <NavLinks />
    
      <h1 style={{ margin: 0 }}>
        <Link
          to="/page-2/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

}

export default Header


   
