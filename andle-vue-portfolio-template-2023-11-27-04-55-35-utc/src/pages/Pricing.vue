<template>
  <div class="main-wrapper dark-bg">

        <router-view></router-view>
        <!-- Navbar section -->
        <Header></Header>

        <!-- Offcanvas section -->
        <Offcanvas></Offcanvas>

        <!-- Pricing Banner Section -->
        <Pricingbanner></Pricingbanner>

        <!-- PricingTable section -->
        <PricingTable></PricingTable>

        <!-- Faq section -->
        <Faq></Faq>

        <!-- Testimonial section -->
        <Testimonial></Testimonial>

        <!-- Footer section -->
        <Footer></Footer>

  </div>
</template>

<script>

import Header from '@/components/Header'
import Offcanvas from '@/components/Offcanvas'
import Pricingbanner from '@/components/Pricingbanner'
import PricingTable from '@/components/PricingTable'
import Faq from '@/components/Faq'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Offcanvas,
    Pricingbanner,
    PricingTable,
    Faq,
    Testimonial,
    Footer
  }
}
</script>
