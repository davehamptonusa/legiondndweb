import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Where.module.scss';

const Where = () => (
  <div className={styles.Where} data-testid="Where">
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
  </div>
);

Where.propTypes = {};

Where.defaultProps = {};

export default Where;
