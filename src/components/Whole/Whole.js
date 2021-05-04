import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import styles from './Whole.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Shop from '../Shop/Shop';
import Testimonials from '../Testimonials/Testimonials';
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

        <Shop items={data.shop} />
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
        <Testimonials testimonials={data.testimonials} />
        <section className="section-bg">
          <SocialLinks links={data.links}/>
        </section>
      </main>
    <Footer />
    <a href="#d" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</div>
    );
  }
}

Whole.propTypes = {};

Whole.defaultProps = {};

export default Whole;
