import React from 'react'

export default function Section2() {
  return (
    <>
      <section id="second">
        <div className="about-section wrapper py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-12">
                <img className="rectangle" src="Images/Rectangle.jpg" alt='' />
              </div>
              <div className="col-lg-6 col-12 text-sec">
                <h2>A new way to <br /> express yourself</h2>
                <ul className="second-page-ul">
                  <li className="second-page-li">Search & Meet</li>
                </ul>
                <ul className="second-sec-page-ul">
                  <li className="second-sec-page-li">Group Video
                  </li>
                  <li className="second-sec-page-li">Video Story
                  </li>
                </ul>
                <p className="second-para">The Perfect app to chat and meet new friends from <br /> all around the world. The most
                  fun way to meet new <br /> friends nearby your location.</p>
                <button className="btn main-btn" type="submit">Download Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
