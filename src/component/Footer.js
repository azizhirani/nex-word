import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'


const Footer = (props) =>{
    return (
  <div class=" text-center">
<Link className=' link-opacity-50 fs-6 text-center  text-wrap' to="https://github.com/azizhirani">
Built with ❤️ by Aziz <br></br>
Source code - Github </Link>
  </div>


    )
}
export default Footer;