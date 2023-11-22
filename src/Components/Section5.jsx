import React, { useState } from 'react';

export default function Section5() {
  const [sectionIndex, setSectionIndex] = useState(0);

  const handleIndicatorClick = (ind) => {
    setSectionIndex(ind);
  };

  const handleLeftArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleRightArrowClick = () => {
    setSectionIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : 3));
  };

  return (
    <>
      <section className="fifth">
        <div className="container">
          <h2 className="heading-fifth">What Others are saying</h2>
          <span className="image-span">
            {' '}
            <img src="Images/quote.svg" className="quote" alt="" />
          </span>
          <div className="container-fifth">
            <div className="carousel-fifth">
              <div
                className="slider-fifth"
                style={{ transform: `translate(${sectionIndex * -25}%)` }}
              >
                <section className="section-fifth">
                  <p className="fifth-para">
                    By far the best app for social networking .Always quick to respond <br /> if there is an issue, no
                    problem in giving credits for orders <br /> that haven't been 100%
                  </p>
                  <p className="center">
                    <img src="Images/Oval.png" className="fifth-page-img" alt="dp" />
                  </p>
                  <p className="name">Amy Portman</p>
                  <p className="title">University Student</p>
                </section>
                <section className="section-fifth">
                  <p className="fifth-para">
                    By far the best app for social networking .Always quick to respond <br /> if there is an issue, no
                    problem in giving credits for orders <br /> that haven't been 100%
                  </p>
                  <p className="center">
                    <img src="Images/Oval.png" className="fifth-page-img" alt="dp" />
                  </p>
                  <p className="name">Bikash Kumar</p>
                  <p className="title">University Student</p>
                </section>
                <section className="section-fifth">
                  <p className="fifth-para">
                    By far the best app for social networking .Always quick to respond <br /> if there is an issue, no
                    problem in giving credits for orders <br /> that haven't been 100%
                  </p>
                  <p className="center">
                    <img src="Images/Oval.png" className="fifth-page-img" alt="dp" />
                  </p>
                  <p className="name">Abhishek Mahapatra</p>
                  <p className="title">University Student</p>
                </section>
                <section className="section-fifth">
                  <p className="fifth-para">
                    By far the best app for social networking .Always quick to respond <br /> if there is an issue, no
                    problem in giving credits for orders <br /> that haven't been 100%
                  </p>
                  <p className="center">
                    <img src="Images/Oval.png" className="fifth-page-img" alt="dp" />
                  </p>
                  <p className="name">Krishna Kumar</p>
                  <p className="title">University Student</p>
                </section>
              </div>
              <div className="controls">
                <span className="arrow left" onClick={handleLeftArrowClick}>
                  <span className="material-icons">keyboard_arrow_left</span>
                </span>
                <span className="arrow right" onClick={handleRightArrowClick}>
                  <span className="material-icons">keyboard_arrow_right</span>
                </span>
                <ul>
                  {[0, 1, 2, 3].map((ind) => (
                    <li
                      key={ind}
                      className={sectionIndex === ind ? 'selected' : ''}
                      onClick={() => handleIndicatorClick(ind)}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
