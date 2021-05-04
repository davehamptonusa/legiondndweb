import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.scss';

const Stat = ({ stat: { title, value } }) => (
   <li><i className="fas fa-chevron-right"></i> <strong>{title}:</strong> <span>{value}</span></li>
)

const Stats = ({ stats }) => (
  <div className={styles.Stats} data-testid="Stats">
    <div className="row">
      <div className="col-lg-6">
        <ul>
        {stats.slice(0,4).map((stat, index) => (
          <Stat key={index} stat={stat} />
        ))}
        </ul>
      </div>
      <div className="col-lg-6">
        <ul>
        {stats.slice(3,7).map((stat, index) => (
          <Stat stat={stat} key={index} />
        ))}
        </ul>
      </div>
    </div>
  </div>
);

Stats.propTypes = {
  stats:PropTypes.array
};

Stats.defaultProps = {};

export default Stats;
