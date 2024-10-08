import React from "react";
import { Link } from "react-router-dom";
import NewsLeter from "../NewsLetter/NewsLetter";

import { Container, Row, Col } from "reactstrap";
const Footer = ({ sectionSpace }) => {
  return (
    <footer
      id="footer-section"
      className={`footer-section ${sectionSpace} clearfix`}
      style={{ backgroundImage: `url(assets/images/footer-bg-1.png)` }}
    >
      <NewsLeter />
      <div className="btns-group ul-li-center mb-100 clearfix">
        <ul className="clearfix">
          <li>
            <a
              rel="noopener noreferrer"
              href="https://appleid.apple.com/"
              target="_blank"
              className="store-btn bg-default-blue"
            >
              <span className="icon">
                <i className="flaticon-apple"></i>
              </span>
              <strong className="title-text">
                <small>available on</small>
                apple store
              </strong>
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://play.google.com/store/apps"
              target="_blank"
              className="store-btn bg-default-pink"
            >
              <span className="icon">
                <i className="flaticon-google-play"></i>
              </span>
              <strong className="title-text">
                <small>available on</small>
                google play
              </strong>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="footer-content mb-100 clearfix"
        data-aos="fade-up"
        data-aos-duration="450"
        data-aos-delay="200"
      >
        <Container>
          <Row>
            <Col lg="3" md="6">
              <div className="about-content">
                <div className="brand-logo mb-30">
                  <Link to="/" className="brand-link">
                    <img
                      src="assets/images/logo/logo-2.png"
                      alt="logo_not_found"
                    />
                  </Link>
                </div>
                <p className="mb-30">
                  Demo is most powerful software & app landing page for any kind
                  of app marketing Business.
                </p>
                <div className="social-links ul-li clearfix">
                  <ul className="clearfix">
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col lg="2" md="6">
              <div className="useful-links ul-li-block clearfix">
                <h3 className="item-title">Apps</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Sales and Refunds</Link>
                  </li>
                  <li>
                    <Link to="/">Legal</Link>
                  </li>
                  <li>
                    <Link to="/">Site Map</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="2" md="6">
              <div className="useful-links ul-li-block clearfix">
                <h3 className="item-title">about us</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="contact.html">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/">Job Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/">Support Center</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="2" md="6">
              <div className="useful-links ul-li-block clearfix">
                <h3 className="item-title">service</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">Job Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/">Faq’s</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg="3" md="6">
              <div className="contact-info ul-li-block clearfix">
                <h3 className="item-title">address</h3>
                <ul className="clearfix">
                  <li>
                    <Link to="/">
                      <small className="icon">
                        <i className="uil uil-phone-pause"></i>
                      </small>
                      <span className="info-text">+448 955 744 333</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <small className="icon">
                        <i className="uil uil-envelope-minus"></i>
                      </small>
                      <span className="info-text">www.yourwebsite.com</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <small className="icon">
                        <i className="uil uil-location-point"></i>
                      </small>
                      <span className="info-text">
                        28 Green Tower, Street Name,New York City, USA
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className="footer-bottom clearfix">
          <Row>
            <Col md="6">
              <p className="copyright-text mb-0">
                Copyright @ 2021{" "}
                <a
                  href="https://themeforest.net/user/marvel_theme/portfolio"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="author-link"
                >
                  appal
                </a>{" "}
                all right reserved.
              </p>
            </Col>

            <Col md="6">
              <div className="useful-links ul-li-right clearfix">
                <ul className="clearfix">
                  <li>
                    <Link to="/">Career</Link>
                  </li>
                  <li>
                    <Link to="/">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
