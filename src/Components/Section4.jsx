import React from 'react'

export default function Section4() {
  return (
    <>
    <section id="fourth">
    <div className="container">
      <h2 className="heading-fourth">Amazing Features you'll love</h2>
      <p className="fourth-para">The Perfect app to share you every memorable moment to <br/> to your friends around the
        world.</p>
      <div className="card-group">
        <div className="card fourth-card fourth-card-extra-left card-color-pink">
          <img src="Images/1.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-fourth-title">Customize Video</h5>
            <p className="card-text">Explore the latest stories and feeds from your friendsbased on your interest.</p>
          </div>
        </div>
        <div className="card fourth-card card-color-blue">
          <img src="Images/Avatar-Woman-01.png" className="card-img-top-sm" alt="..."/>
          <img src="Images/2.png" className="card-img-top" alt="..."/>
          <img src="Images/Avator-Man-C01.png" className="card-img-top-sm" alt="..."/>
          <div className="card-body">
            <h5 className="card-fourth-title">Group Video call</h5>
            <p className="card-text">Explore the latest stories and feeds from your friendsbased on your interest.</p>
          </div>
        </div>
        <div className="card fourth-card card-color-pink">
          <img src="Images/Group-4-Copy-2.png" className="card-img-top-sm" alt="..."/>
          <img src="Images/3.png" className="card-img-top" alt="..."/>
          <img src="Images/Group-4-Copy.png" className="card-img-top-sm" alt="..."/>
          <div className="card-body">
            <h5 className="card-fourth-title">Better group chat</h5>
            <p className="card-text">Explore the latest stories and feeds from your friendsbased on your interest.</p>
          </div>
        </div>
        <div className="card fourth-card fourth-card-extra-right card-color-blue">
          <img src="Images/4.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-fourth-title">New Aniemojis</h5>
            <p className="card-text">Explore the latest stories and feeds from your friendsbased on your interest..</p>
          </div>
        </div>
      </div>
      <button className="btn main-btn fourth-btn mt-4" type="submit">Download Now</button>
    </div>
  </section>
    </>
  )
}
