import React from 'react'

export default function Navbar() {
  return (
    <>
     <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
      <div className="container">
        <a className="navbar-brand" link="/"><img src="Images/Interface Market.svg" className="logo"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" link="/">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" link="/">How its works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" link="/">Blogs</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn main-btn" type="submit">Download Now</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
    </>
  )
}
