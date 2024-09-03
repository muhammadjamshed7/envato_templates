<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- ProjectGallery Section -->
        <ProjectGallery></ProjectGallery>

        <!-- Footer section -->
        <Footer></Footer>

  </div>
</template>

<script>

  import Header from '@/components/Header'
  import Offcanvas from '@/components/Offcanvas'
  import ProjectGallery from '@/components/ProjectGallery'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,
      Offcanvas,
      ProjectGallery,
      Footer
    }
  }
</script>
