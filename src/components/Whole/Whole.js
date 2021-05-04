import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import styles from './Whole.module.scss';
import Header from '../Header/Header';
import Player from '../Player/Player';
import SocialLinks from '../SocialLinks/SocialLinks'
import data from '../../data/data';


class Whole extends Component {
  // use comonentDidMount lifecycle method
  componentDidMount() {
    var loadScript = function (src) {
      var tag = document.createElement('script');
      tag.async = false;
      tag.src = src;
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(tag);
    }

    loadScript('/js/main.js');
    loadScript('/vendor/purecounter/purecounter.js');
    document.querySelectorAll('.cocoen').forEach( it  => {
      window.Cocoen.create(it,{start:10, color:"#c02e07"});
    });
  }
  render () {
    return(
      <div className="styles.Whole" data-testid="Whole">
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <Header data={data}/>
    
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container" data-aos="fade-in">
            <h1>LEGION DND</h1>
            <p>The More You <span className="typed" data-typed-items="Roll, Role, Troll, Gnoll, Bowl?, Laugh, Live, Love"></span></p>
          </div>
        </section>

        <main id="main">
          {Object.keys(data.players).map((key) => (
            <Player key={key} player={data.players[key]} />
          ))}

<section id="shop" className="portfolio">
  <div className="container">

    <div className="section-title">
      <h2>Shop</h2>
      <p>Look at these great products you can buy at the LegionM store!</p>
    </div>

    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">Clothing</li>
          <li data-filter=".filter-card">Mugs</li>
          <li data-filter=".filter-web">NFTs</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      
    </div>

  </div>
</section>
<section id="where" className="services section-bg">
  <div className="container">

    <div className="section-title">
      <h2>Where to Watch & Listen</h2>
      <p>You can catch us on all the things!</p>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
        <div className="icon"><i className="fab fa-twitch"></i></div>
        <h4 className="title"><a href="https://twitch.tv/legiondnd">Twitch</a></h4>
        <p className="description">Catch us every Tuesday evening at 6:30(ish) Pacific! Watch the trainwreck in real time! Chat with us! Vote on story plots and mild player inconveniences</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
        <div className="icon"><i className="fab fa-youtube"></i></div>
        <h4 className="title"><a href="https://www.youtube.com/channel/UCfMhhsGRn-sdwQq2zVSiI-A">YouTube</a></h4>
        <p className="description">Can't make it on Tuesday but still want to watch the trainwreck instead of listen? Or perhaps speed it up 10X? - Youtube is for you!</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
        <div className="icon"><i className="fab fa-spotify"></i></div>
        <h4 className="title"><a href="https://open.spotify.com/show/328NIJPzQryj6YFFD6Sdaj">Spotify</a></h4>
        <p className="description">Are we on the world's largest streaming service? Yes we are!</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
        <div className="icon"><i className="fas fa-podcast"></i></div>
        <h4 className="title"><a href="https://podcasts.apple.com/us/podcast/legiondnd/id1547728190">Apple Podcasts</a></h4>
        <p className="description">Yes! We are here too! So you never have to leave your Apple fanboy eco-system if you don't want to!</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
        <div className="icon"><i className="fab fa-google"></i></div>
        <h4 className="title"><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80NmNhNDM5Yy9wb2RjYXN0L3Jzcw">Google Podcasts</a></h4>
        <p className="description">Or your Google fanboy eco-system...</p>
      </div>
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
        <div className="icon"><i className="fas fa-sitemap"></i></div>
        <h4 className="title"><a href="#d">Website</a></h4>
        <p className="description">Visit this Website to end up right back here again!</p>
      </div>
    </div>

  </div>
</section>

<section id="testimonials" className="testimonials">
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
</section>
<section className="section-bg">
  <SocialLinks links={data.links}/>
</section>


</main>
<footer id="footer">
<div className="container">
  <div className="copyright">
    &copy; 2021 LegionDND
  </div>
  <div className="credits">
    <a href="https://toolset.legiondnd.com/">Visit Our Toolset</a>
  </div>
</div>
</footer>

<a href="#d" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>


</div>
    );
  }
}

Whole.propTypes = {};

Whole.defaultProps = {};

export default Whole;
