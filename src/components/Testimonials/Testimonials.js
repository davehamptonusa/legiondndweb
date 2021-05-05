import React from 'react';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.scss';

const Testimonials = () => (
  <div className={styles.Testimonials} data-testid="Testimonials">
      <div className="container">

        <div className="section-title">
          <h2>Testimonials</h2>
          <p>Check out what these actual viewers and listeners said about watching Legion DND!</p>
        </div>

        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <i className="fas fa-quote-left quote-icon-left"></i>
                  Dave is the most Amazing DM I have ever heard. He is like really super good and whatever. He does all the DM things so good... Can I have my twenty bucks now?
                  <i className="fas fa-quote-right quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                <h3>Saul Goodman</h3>
                <h4>Paid Endorser</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                <p>
                  <i className="fas fa-quote-left quote-icon-left"></i>
                  Myself and a bunch of my stock photo friends get together every Tuesday and watch and listen to LegionDND. Unlike us, they are real people and the world they weave is truly memorable.
                  <i className="fas fa-quote-right quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                <h3>Sara Wilsson</h3>
                <h4>Model</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                <p>
                  <i className="fas fa-quote-left quote-icon-left"></i>
                  Hey evry1! I snuck in line and they didn't notice me! LOLZ! Such losers, right?! Anyone who can't lock down their fake testimonials is a loser! Don't watch or listen to the show! They suk! Jena out!
                  <i className="fas fa-quote-right quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Angst-Filled Teen</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                <p>
                  <i className="fas fa-quote-left quote-icon-left"></i>
                  Super motivated to be here all! Amazing! Check out my new start up - It's called [REDACTED] It's like a total disruptor in the personal Pet Care space. Just like Apple, Google, and Tesla - we're the thought-leader.
                  <i className="fas fa-quote-right quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Entrepreneur & CEO</h4>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                <p>
                  <i className="fas fa-quote-left quote-icon-left"></i>
                  Hello? Is this Quizno's? I'd like to order a Chipolte Turkey sandwich, some Jalepeño chips and a Diet Coke. Hello? Damnit. I hate these automated lines. TIMMY! Don't hit your sister! Don't make me put down this phone. Thats it! TIM---
                  <i className="fas fa-quote-right quote-icon-right"></i>
                </p>
                <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Father of three</h4>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
  </div>
);

Testimonials.propTypes = {
  testimonials: PropTypes.object
};

Testimonials.defaultProps = {};

export default Testimonials;
