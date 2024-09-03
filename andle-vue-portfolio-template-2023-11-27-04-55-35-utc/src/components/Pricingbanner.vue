<template>
    <!-- Pricing Banner Start -->
    <div class="section pricing-banner-section" :style="{backgroundImage: `url(${ pricingBg })`}">
        <div class="container">

            <!-- Pricing Banner Content Start -->
            <div class="pricing-banner-content">
                <h2 class="title wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.5s"> <span>Simple pricing</span> that scales <br> with your business</h2>
                <p>Whether you’re an business in growth mode or a game studio</p>
            </div>
            <!-- Pricing Banner Content End -->

        </div>
    </div>
    <!-- Pricing Banner End -->
</template>

<script>
export default {
    data() {
        return {
            pricingBg: "/images/pricing-bg.jpg",
        }
    }
}
</script>
