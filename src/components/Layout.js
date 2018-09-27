import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="CSS Memo" />
    <Navbar />
    <div>{children}</div>
    <footer className="footer">
      <div className="content has-text-centered">
        <p><small>&copy; 2018 <a href="https://twitter.com/suige_" target="_blank" rel="noopener noreferrer " className="has-text-primary">suige_</a></small></p>
      </div>
    </footer>
  </div>
)

export default TemplateWrapper
