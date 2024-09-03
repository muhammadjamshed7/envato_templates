<template>
    <div class="section section-padding-02">
        <div class="container">

            <!-- Why Choose Start -->
            <div class="why-choose-section mt-n3">

                <!-- Section Title Start -->
                <div class="section-title">
                    <h2 class="title">why choose me</h2>
                </div>
                <!-- Section Title End -->

                <!-- Why Choose Wrapper Start -->
                <div class="why-choose-wrapper" id="why-choose-wrapper">
                    <div class="row gx-0">
                        <div class="col-lg-3 col-sm-6" v-for="(feature, index) in featureLogos" :key="index">
                            <!-- Service Box Start -->
                            <div class="service-box wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="2s"  
                            @mouseover="show = index;" 
                            @mouseout="show = false;" 
                            :class="{ active: show === index }">
                                <div class="box-content">
                                    <h4 class="title"><router-link to="/about">{{feature.title}}</router-link></h4>
                                    <p>{{feature.text}}</p>
                                </div>
                                <div class="box-icon">
                                    <i :class="feature.icon"></i>
                                    <router-link to="/about" class="more">{{feature.more}}</router-link>
                                </div>
                            </div>
                            <!-- Service Box End -->
                        </div>
                    </div>
                </div>
                <!-- Why Choose Wrapper End -->

            </div>
            <!-- Why Choose End -->

        </div>
    </div>

</template>

<script>
export default {
    data () {
        return { 
            show: false,
            featureLogos: [
                {
                    title: "profressional and dedicate team",
                    text: "Building architectures with modern technology.",
                    icon: "icofont-labour",
                    more: "Read more"
                },
                {
                    title: "unique design",
                    text: "Building architectures with modern technology.",
                    icon: "icofont-ruler-compass-alt",
                    more: "Read more"
                },
                {
                    title: "affordable and flexiable",
                    text: "Building architectures with modern technology.",
                    icon: "icofont-credit-card",
                    more: "Read more"
                },
                {
                    title: "24/7 support",
                    text: "Building architectures with modern technology.",
                    icon: "icofont-live-support",
                    more: "Read more"
                }
            ]
        }
    }
}
</script>
