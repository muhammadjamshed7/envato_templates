<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- SingleProject Section -->
        <SingleProject></SingleProject>

        <!-- Footer section -->
        <Footer></Footer>

  </div>
</template>

<script>

  import Header from '@/components/Header'
  import Offcanvas from '@/components/Offcanvas'
  import SingleProject from '@/components/SingleProject'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,
      Offcanvas,
      SingleProject,
      Footer
    }
  }
</script>