<template>
    <!-- Brand Logo Start -->
    <div class="section overflow-hidden section-padding-02">
        <div class="client-section">
            <div class="container">

                <!-- Section Title Start -->
                <div class="section-title-2">
                    <h2 class="title">My Clients</h2>
                </div>
                <!-- Section Title End -->

                <div class="client-wrapper">
                    <div class="client-active swiper-container">

                        <swiper
                            :breakpoints="swiperOptions.breakpoints"
                            :slides-per-view="5"
                            :loop="true"
                            @swiper="onSwiper"
                        >
                            <swiper-slide class="swiper-slide" v-for="(brand, index) in brandLogos" :key="index">
                                <div class="image-box"><img :src="brand.imgSrc" :alt="brand.alt"></div>
                            </swiper-slide>
                        </swiper>

                    </div>
                </div>
            </div>
        </div>
        <!-- Client End -->

    </div>
    <!-- Client & About End -->
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },

        data () {
            return {
                swiperOptions: {
                    breakpoints: {       
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        576: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }   
                },

                brandLogos: [
                    {
                        imgSrc: "/images/clients/client-1.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/clients/client-2.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/clients/client-3.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/clients/client-4.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/clients/client-5.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/clients/client-3.png",
                        alt: "brand logo"
                    },
                    {
                        imgSrc: "/images/clients/client-5.png",
                        alt: "brand logo"
                    }
                ]
            }
        },

        methods: {
            onSwiper(swiper) {
            this.swiper = swiper;
            },
        },

  // Connect to API

    };
</script>