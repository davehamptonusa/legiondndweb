import React from 'react';
import PropTypes from 'prop-types';
import styles from './Facts.module.scss';

const Fact = ({
   fact: { number, icon, textBold, text }, delay
}) => (
<div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay={delay*100}>
            <div className="count-box">
              <i className={icon}></i>
              <span data-purecounter-start="0" data-purecounter-end={number} data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>{textBold}</strong> {text}</p>
            </div>
          </div>)

const Facts = ({facts}) => (
  <div className={styles.Facts} data-testid="Facts">
        <div className="section-title">
          <h4>Facts</h4>
          <p>{facts.factIntro}</p>
        </div>

        <div className="row no-gutters">
          {facts.list.map((fact, index) => (
            <Fact key={index} fact={fact} delay={index} />
          ))}
        </div>
  </div>
);

Facts.propTypes = {
  facts:PropTypes.object
};

Facts.defaultProps = {};

export default Facts;
