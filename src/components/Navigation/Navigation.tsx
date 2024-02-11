import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/logo.png'
import './style.css'


const Navigation = () => {
  return (
<nav className="navbar navbar-expand-md py-3" aria-label="Main Navigation" role="navigation">
    <div className="container-md">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Roof Master" style={{width: "2rem"}}/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} className='text-white' />
      </button>

      <div className="collapse navbar-collapse main-nav" id="mainNavbar" aria-labelledby="navigation">
        <ul className="navbar-nav d-flex justify-content-md-end w-100 me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-md-2">
            <a className="nav-link text-white" href="/">Home</a>
        </li>
        <li className="nav-item mx-md-2">
            <a className="nav-link text-white" href="/movies">Movies</a>
        </li>
        <li className="nav-item mx-md-2">
            <a className="nav-link text-white" href="/login">Login</a>
        </li>
        <li className="nav-item mx-md-2">
            <a className="nav-link text-white" href="/register">Register</a>
        </li>
        <li className="nav-item mx-md-2">
            <a className="nav-link text-white" href="/tickets">My Tickets</a>
        </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navigation