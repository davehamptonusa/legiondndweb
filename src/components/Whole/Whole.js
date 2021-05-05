import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import styles from './Whole.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Shop from '../Shop/Shop';
import Testimonials from '../Testimonials/Testimonials';
import Player from '../Player/Player';
import Where from '../Where/Where';
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
            <p>The More You <span className="typed" data-typed-items="Roll, Role, Lolz, Live, Laugh, Love"></span></p>
          </div>
        </section>
        <main id="main">
          {Object.keys(data.players).map((key) => (
            <Player key={key} player={data.players[key]} />
          ))}
        <section id="shop" className="portfolio">
          <Shop items={data.shop} />
        </section>
        <section id="where" className="services section-bg">
          <Where />
        </section>
        <section id="testimonials" className="testimonials">
          <Testimonials testimonials={data.testimonials} />
        </section>
        <section className="section-bg">
          <SocialLinks links={data.links}/>
        </section>
      </main>
    <Footer />
    <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
</div>
    );
  }
}

Whole.propTypes = {};

Whole.defaultProps = {};

export default Whole;
