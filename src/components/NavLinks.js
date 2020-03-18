import { Link } from "gatsby"
import React from "react"
import '../components/scss/style.scss'
import "../components/scss/layout.scss"


const NavLinks= () => {

 return (
  <nav className="header-wrapper">.
  <div className="navbar-wrapper">
  <ul className="top-nav">
   <li className="nav-link"><Link to="/page-2/">Link 1</Link></li>

   <li className="nav-link"><Link to="/page-2/">Link 2</Link>
   {/* <ul>
  <p className="menu-item"><Link to="/page-2/">Sublink 1</Link></p>
  <p className="menu-item"><Link to="/page-2/">Sublink 2</Link></p>
  <p className="menu-item"><Link to="/page-2/">Sublink 3</Link></p>
  <p className="menu-item"><Link to="/page-2/">Sublink 4</Link></p>
   </ul> */}
   </li>
  
   <li className="nav-link"><Link to="/page-2/">Link 3</Link></li>

<li className="nav-link"><Link to="/page-2/">Link 4</Link>
{/* <ul>
<p className="menu-item"><Link to="/page-2/">Sublink 5</Link></p>
<p className="menu-item"><Link to="/page-2/">Sublink 6</Link></p>
<p className="menu-item"><Link to="/page-2/">Sublink 7</Link></p>
<p className="menu-item"><Link to="/page-2/">Sublink 8</Link></p>
</ul> */}
</li>

  


  </ul>
  </div>


  </nav>
  
 )

 }

 export default NavLinks