<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- SingleBlog Section -->
        <SingleBlog></SingleBlog>

        <!-- Footer section -->
        <Footer></Footer>

  </div>
</template>

<script>

  import Header from '@/components/Header'
  import Offcanvas from '@/components/Offcanvas'
  import SingleBlog from '@/components/SingleBlog'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,
      Offcanvas,
      SingleBlog,
      Footer
    }
  }
</script>