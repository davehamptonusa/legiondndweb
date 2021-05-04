import React from 'react';
import PropTypes from 'prop-types';
import styles from './Shop.module.scss';

const Shop = () => (
  <div className={styles.Shop} data-testid="Shop">
<section id="shop" className="portfolio">
  <div className="container">

    <div className="section-title">
      <h2>Shop</h2>
      <p>Look at these great products you can buy at the LegionM store!</p>
    </div>

    <div className="row" data-aos="fade-up">
      <div className="col-lg-12 d-flex justify-content-center">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">Clothing</li>
          <li data-filter=".filter-card">Mugs</li>
          <li data-filter=".filter-web">NFTs</li>
        </ul>
      </div>
    </div>

    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-card">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className="portfolio-wrap">
          <img src="img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
          <div className="portfolio-links">
            <a href="img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="fas fa-search-plus"></i></a>
            <a href="https://shop.legionm.com/collections/legiondnd" title="More Details"><i className="fas fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>

      
    </div>

  </div>
</section>
  </div>
);

Shop.propTypes = {
  items:PropTypes.array
};

Shop.defaultProps = {};

export default Shop;
