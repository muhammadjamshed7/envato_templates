<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Slider section -->
        <Slider></Slider>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- BrandLogo section -->
        <BrandLogo></BrandLogo>

        <!-- About section -->
        <AboutSection></AboutSection>

        <!-- Features section -->
        <Features></Features>

        <!-- Fanfact section -->
        <Funfact></Funfact>

        <!-- Workgallery section -->
        <Workgallery></Workgallery>

        <!-- BlogArticle section -->
        <BlogArticle></BlogArticle>

        <!-- Testimonial section -->
        <Testimonial></Testimonial>

        <!-- Footer section -->
        <Footer></Footer>
        
  </div>
</template>

<script>

import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Offcanvas from '@/components/Offcanvas'
import BrandLogo from '@/components/BrandLogo'
import AboutSection from '@/components/AboutSection'
import Features from '@/components/Features'
import Funfact from '@/components/Funfact'
import Workgallery from '@/components/Workgallery'
import BlogArticle from '@/components/BlogArticle'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Slider,
    Offcanvas,
    BrandLogo,
    AboutSection,
    Features,
    Funfact,
    Workgallery,
    BlogArticle,
    Testimonial,
    Footer
  }
}
</script>