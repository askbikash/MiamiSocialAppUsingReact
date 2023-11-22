import React from 'react'

export default function Hero() {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <h1>Meet New<br /> Friends Anytime,<br /> Anywhere!</h1>
              <p>A Simple way to capture , edit & share photos, <br /> videos and messages with Friends</p>
              <div className="mt-4">
                <span><img src="Images/playstore.png" className="download-btn" alt='' /></span>
                <span><img src="Images/appstore.png" className="download-app-btn" alt='' /></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
