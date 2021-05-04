import React from 'react';
//import PropTypes from 'prop-types';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
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
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
