import React from 'react'

export default function Section3() {
  return (
    <>
    <section id="third">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-6 third-iphone-div">
          <h2 className="third-heading">Share your every <br/> BIG moment!</h2>
          <p className="third-para">The Perfect app to share your every memorable <br/> moment to your friends and around
            the world</p>
          <button className="btn main-btn third-button" type="submit">Download Now</button>
        </div>
        <div className="col-lg-6 col-md-6 col-6 image"><img
            className="iphone-image" src="Images/iPhone.png" alt=''/></div>
      </div>
    </div>
  </section>
    </>
  )
}
