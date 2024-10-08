import React, { Fragment } from "react";
import PageTitle from "../../components/utility";
import { LayoutFluid } from "../../layouts";
import { BreadCrumbOne } from "../../components/BreadCrumb";
import { BlogDefault } from "../../components/Blogs";

const BlogDefaultPage = () => {
  return (
    <Fragment>
      <PageTitle
        PageTitle="Blog Post - Appal - Mobile App Leanding Page"
        favicon="assets/images/logo/favourite-icon-0.png"
      />
      <LayoutFluid
        wrapperClass="blog-page"
        activeClass="active"
        sectionSpace="sec-ptb-160 pb-0"
        whitekContent="white-content"
        logoWhite="assets/images/logo/logo-1.png"
      >
        <main>
          <BreadCrumbOne
            title="Blog Post Default"
            pageName="blog post"
            curentPageName="blog post"
          />
          <BlogDefault sectionSpace="sec-ptb-160 pb-0" />
        </main>
      </LayoutFluid>
    </Fragment>
  );
};

export default BlogDefaultPage;
