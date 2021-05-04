import React from 'react';
import PropTypes from 'prop-types';
import styles from './Scores.module.scss';

const Scores = ( { 
    scores: {
      intro, 
      abilities: {
        strength, 
        dexterity, 
        constitution,
        wisdom, 
        intelligence, 
        charisma 
      }
    }
  }) => (
  <div className={styles.Scores} data-testid="Scores">
      <div className="container">

<div className="section-title">
  <h4>Ability Scores</h4>
  <p>{intro}
  </p>
</div>

<div className="row skills-content">

  <div className="col-lg-6" data-aos="fade-up">

    <div className="progress">
      <span className="skill">Strength <i className="val">{strength}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={strength*5} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill">Dexterity <i className="val">{dexterity}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={dexterity *5} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill">Constitution <i className="val">{constitution}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={constitution*5} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

  </div>

  <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

    <div className="progress">
      <span className="skill">Intelligence <i className="val">{intelligence}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={intelligence*5} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill">Wisdom <i className="val">{wisdom}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={wisdom*5} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

    <div className="progress">
      <span className="skill">Charisma <i className="val">{charisma}</i></span>
      <div className="progress-bar-wrap">
        <div className="progress-bar" role="progressbar" aria-valuenow={charisma*5} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>

  </div>

</div>

</div>
  </div>
);

Scores.propTypes = {
  scores: PropTypes.object
};

Scores.defaultProps = {};

export default Scores;
