import React from 'react'

export default function Footer() {
  return (
    <>
    <section className="newsletter">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-6 mb-5 footer-image">
          <img className="news-iphone" src="Images/iPhone.png" alt=""/>
        </div>
        <div className="col-lg-6 col-md-6 col-6 mb-5">
          <h2 className="news-heading">Download Miami Social <br/> Media App Today!</h2>
          <p className="news-para">The perfect Social Networking App for you.</p>
          <div className="mt-4">
            <span><img src="Images/playstore.png" alt='' className="download-btn"/></span>
            <span><img src="Images/appstore.png" alt='' className="download-app-btn"/></span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-6 centre">
          <ul className="designed">
            <li className="designed-in">Designed in California</li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-6">
          <ul className="links">
            {/* <li className="link"><i className="fa-brands fa-instagram"></i></li>
            <li className="link"><i className="fa-brands fa-twitter"></i></li>
            <li className="link"><i className="fa-brands fa-facebook"></i></li> */}
            <li className="link">Download</li>
            <li className="link">Privacy</li>
            <li className="link">Terms of use</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}
