<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- About Banner Section -->
        <Aboutbanner></Aboutbanner>

        <!-- BrandLogo section -->
        <BrandlogoTwo></BrandlogoTwo>

        <!-- BlogArticle section -->
        <BlogArticle></BlogArticle>

        <!-- Skill section -->
        <Skill></Skill>

        <!-- Footer section -->
        <Footer></Footer>

  </div>
    
</template>

<script>

import Header from '@/components/Header'
import Offcanvas from '@/components/Offcanvas'
import Aboutbanner from '@/components/Aboutbanner'
import BrandlogoTwo from '@/components/BrandlogoTwo'
import BlogArticle from '@/components/BlogArticle'
import Skill from '@/components/Skill'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Offcanvas,
    Aboutbanner,
    BrandlogoTwo,
    BlogArticle,
    Skill,
    Footer
  }
}
</script>
