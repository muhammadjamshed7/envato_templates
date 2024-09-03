import React, { Fragment } from "react";

import ContactForm from "../../components/Formik";

class Map extends React.Component {
  render() {
    return (
      <Fragment>
        <section id="map-section" className={`map-section clearfix`}>
          <iframe
            className="google-map"
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127493.9864590299!2d-60.03714398056308!3d-3.044488354877042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b485c9ff765a9cc!2sManaus%2C%20State%20of%20Amazonas%2C%20Brazil!5e0!3m2!1sen!2sbd!4v1614010013705!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <ContactForm />
        </section>
      </Fragment>
    );
  }
}

export default Map;
