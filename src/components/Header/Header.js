import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import SocialLinks from '../SocialLinks/SocialLinks.js'
import data from '../../data/data';

const Header = ({data}) => (
  <div className={styles.Header} data-testid="Header">
      <header id="header">
      <div className="d-flex flex-column">

        <div className="profile">
          <img src="img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
          <h1 className="text-light"><a href="index.html">LEGION DND</a></h1>
          <SocialLinks links={data.links} />
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="fas fa-home"></i> <span>Home</span></a></li>
            {Object.keys(data.players).map((key) => (
            <li><a href={"#"+ data.players[key].pageLink} className="nav-link scrollto"><i className={data.players[key].icon}></i> <span>{data.players[key].firstName}</span></a></li>
            ))}
            <li><a href="#shop" className="nav-link scrollto"><i className="fas fa-shopping-bag"></i> <span>Shop</span></a></li>
            <li><a href="#where" className="nav-link scrollto"><i className="fas fa-video"></i> <span>Where to Watch</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
);

Header.propTypes = {
  data: PropTypes.object
};

Header.defaultProps = {
};

export default Header;
