import React from 'react'
import PropTypes from 'prop-types'
// import DarkMode from '.src/component/darkmode/DarkMode'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="./favicon-96x96.png" width="50" height="50" className="d-inline-block align-top rounded-3" alt="" /></a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Convert Case</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.aboutText}</Link>
            </li>
             

          </ul>

          <div className={` form-check form-switch mx-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className={`form-check-label `} htmlFor="flexSwitchCheck">Enable Dark Mode</label>
          </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}


//UNDERSTANDING PROPS AND DEFAULT PROPS
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }

Navbar.defaultProps = { title: 'Set Title Here', aboutText: 'About' };

export default Navbar;