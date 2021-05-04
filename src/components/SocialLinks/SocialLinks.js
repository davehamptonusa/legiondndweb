import React from 'react';
import PropTypes from 'prop-types';
import styles from './SocialLinks.module.scss';

const SocialLink = ({ link} ) => (
  <a href={link.href} className={link.type}><i className={`fab fa-` + link.type}></i></a>
);

const SocialLinks = (props) => (
  <div className={"social-links mt-3 " + props.align + " " + styles.SocialLinks}  data-testid="SocialLinks">
    {props.links.map((link) => (
      <SocialLink key={link.type} link={link} />
    ))}
  </div>
);

SocialLinks.propTypes = {
  links: PropTypes.array,
  align: PropTypes.string
};

SocialLinks.defaultProps = {
  align: "text-center"
};

export default SocialLinks;
