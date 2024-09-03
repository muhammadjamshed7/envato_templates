import React, { useState } from "react";
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";

import classnames from "classnames";
import TitleSection from "../Titlesection/TitleSection";
import titleTwo from "../../data/title/title-two.json";

const [{ title, Paragraph }] = titleTwo;

const FeaturesNav = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <section
        id="extra-features-section"
        className="extra-features-section sec-ptb-160 bg-light-gray clearfix"
      >
        <Container>
          <Row className="justify-content-center">
            <Col sm="12" lg="6" md="8">
              {
                <TitleSection spacer="mb-100" textAlign="text-center">
                  <h2 className="title-text mb-30">{title}</h2>
                  <p className="paragraph-text mb-0">{Paragraph}</p>
                </TitleSection>
              }
            </Col>
          </Row>

          <div className="features-nav ul-li-center mb-100">
            {/* class="nav" */}
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="assets/fonts/svg/filled/Interaction.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  install the app
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="assets/fonts/svg/filled/Floder.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  input your data
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <span className="item-icon">
                    <img
                      src="assets/fonts/svg/filled/Pie_Chart.svg"
                      alt="icon_not_found"
                    />
                  </span>
                  quick data analysis
                </NavLink>
              </NavItem>
            </Nav>
          </div>

          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">
                      Easy and most
                      <span className="break-point">
                        user friendly app Features
                      </span>
                    </h3>
                    <p className="mb-30">
                      Every website hosted by Appal Host is given by free fully
                      SSL certificate and Protect your website visitors with one
                      click Illustration. Lorem ipsum dolor sit amet, ectetur
                      adipisicing elit ipsum dolor sit amet.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> After you
                          purchase a hosting plan
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Next to the
                          hosting account you want to use, click Manage
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Select or enter
                          the domain name you want to use.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Select or enter
                          the domain name you want to use.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="assets/images/features/img-1.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">
                      Easy and most
                      <span className="break-point">
                        user friendly app Features
                      </span>
                    </h3>
                    <p className="mb-30">
                      Every website hosted by Appal Host is given by free fully
                      SSL certificate and Protect your website visitors with one
                      click Illustration. Lorem ipsum dolor sit amet, ectetur
                      adipisicing elit ipsum dolor sit amet.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> After you
                          purchase a hosting plan
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Next to the
                          hosting account you want to use, click Manage
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Select or enter
                          the domain name you want to use.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Select or enter
                          the domain name you want to use.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="assets/images/features/img-2.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row className="justify-content-lg-start justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                  <div className="feature-content">
                    <h3 className="item-title mb-30">
                      Easy and most
                      <span className="break-point">
                        user friendly app Features
                      </span>
                    </h3>
                    <p className="mb-30">
                      Every website hosted by Appal Host is given by free fully
                      SSL certificate and Protect your website visitors with one
                      click Illustration. Lorem ipsum dolor sit amet, ectetur
                      adipisicing elit ipsum dolor sit amet.
                    </p>
                    <div className="instructions-list ul-li-block">
                      <ul className="clearfix">
                        <li>
                          <i className="flaticon-checked"></i> After you
                          purchase a hosting plan
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Next to the
                          hosting account you want to use, click Manage
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Select or enter
                          the domain name you want to use.
                        </li>
                        <li>
                          <i className="flaticon-checked"></i> Select or enter
                          the domain name you want to use.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>

                <Col sm="12" lg="6" md="8">
                  <div className="feature-image text-center">
                    <img
                      src="assets/images/features/img-3.png"
                      alt="image_not_found"
                    />
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </Container>
      </section>
    </div>
  );
};

export default FeaturesNav;
