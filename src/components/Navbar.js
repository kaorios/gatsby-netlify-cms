import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import codepen from '../img/codepen-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="suige" style={{ width: '30px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://codepen.io/suige/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={codepen} alt="Codepen" />
          </span>
        </a>
        <a
            className="navbar-item"
            href="https://github.com/suige/"
            target="_blank"
            rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
