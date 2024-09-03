<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>

        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- ContactUs section -->
        <ContactUs></ContactUs>

  </div>
</template>

<script>

    import Header from '@/components/Header'
    import Offcanvas from '@/components/Offcanvas'
    import ContactUs from '@/components/ContactUs'

    export default {
        components: {
            Header,
            Offcanvas,
            ContactUs
        }
    }
</script>