<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- BlogGrid Section -->
        <BlogGrid></BlogGrid>

        <!-- Footer section -->
        <Footer></Footer>

  </div>
</template>

<script>

  import Header from '@/components/Header'
  import Offcanvas from '@/components/Offcanvas'
  import BlogGrid from '@/components/BlogGrid'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,
      Offcanvas,
      BlogGrid,
      Footer
    }
  }
</script>
