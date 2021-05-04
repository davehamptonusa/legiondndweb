import React from 'react';
import PropTypes from 'prop-types';
import styles from './Player.module.scss';
import SocialLinks from '../SocialLinks/SocialLinks';
import Stats from './Stats/Stats';
import Facts from './Facts/Facts';
import Scores from './Scores/Scores';




const Player = ({ player:
  {
    pageLink,
    name,
    title,
    links,
    imgBefore,
    imgAfter,
    about,
    bio,
    stats,
    facts,
    scores
  } 
}) => (
  <div className={styles.Player} data-testid="Player">
    <section id={pageLink} className="about section-bg">
      <div className="container" >
        <div className="section-title">
          <h2>{name}</h2>
          <p>{title}
          </p>
          <SocialLinks links={links} align="text-left"/>
        </div>
      </div>
    </section>
    <section className="about">
    <div className="container" >
        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="cocoen">
              <img src={imgBefore} alt=""/>
              <img src={imgAfter} className="img-fluid" alt=""/>
            </div>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h4>About Me</h4>
            <p className="fst-italic">{about}
            </p>
            <Stats stats={stats} />
            {bio}
          </div>
        </div>
      </div>
    </section>
    <section className="facts section-bg">
      <div className="container">
          <Facts facts={facts} />
      </div>
    </section>
    <section className="skills">
       <Scores scores={scores} />
    </section>
  </div>
);

Player.propTypes = {
  player: PropTypes.object
};

Player.defaultProps = {};

export default Player;
