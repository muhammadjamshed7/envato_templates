<template>
    <!-- Testimonial Start -->
    <div class="section">
        <div class="container">
            <div class="testimonial-wrapper section-padding">

                <!-- Section Title Start -->
                <div class="section-title-2">
                    <h2 class="title">Testimonial</h2>
                </div>
                <!-- Section Title End -->

                <!-- Testimonial Carousel End -->
                <div class="testimonial-carousel">
                    <div class="swiper-container">
                        <swiper 
                            :breakpoints="swiperOptions.breakpoints"
                            :slides-per-view="2"
                            :spaceBetween="30"
                            :loop="true"
                            :navigation="swiperOptions.navigation"
                            @swiper="onSwiper"
                        >
                            <swiper-slide class="swiper-slide" v-for="(refItem, index) in refItems" :key="index">

                                <!-- Single testimonial Start -->
                                <div class="single-testimonial">
                                    <i class="icofont-quote-right"></i>

                                    <!-- testimonial Content Start -->
                                    <div class="testimonial-content">
                                        <!-- Name Start -->
                                        <h6 class="name">
                                            <span class="nametitle"> {{refItem.name}} </span> / <span> {{refItem.title}}</span>
                                        </h6>
                                        <!-- Name End -->
                                        <p> {{refItem.text}} </p>
                                    </div>
                                    <!-- testimonial Content End -->
                                    
                                </div>
                                <!-- Single testimonial End -->
                            </swiper-slide>
                        </swiper>
                    </div>

                    <!-- Swiper Pagination Start -->
                    <div class="swiper-pagination d-none"></div>
                    <!-- Swiper Pagination End -->

                    <!-- Swiper Navigation Start -->
                    <div class="swiper-button-prev"><i class="icofont-thin-left"></i></div>
                    <div class="swiper-button-next"><i class="icofont-thin-right"></i></div>
                    <!-- Swiper Navigation End -->
                </div>
                <!-- Testimonial Carousel End -->

            </div>
        </div>
    </div>
    <!-- Testimonial End -->
</template>

<script>
import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([
    Navigation
]);
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
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 2,
                    }
                },
                navigation: {
                    nextEl: '.testimonial-carousel .swiper-button-next',
                    prevEl: '.testimonial-carousel .swiper-button-prev'
                }
            },
            
            refItems: [
                {
                    name: "Ryan Betthalyn",
                    title: "Director at Chobham Manor",
                    text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                },
                {
                    name: "Bobs Hanely",
                    title: "Director at Spotify",
                    text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."
                }
            ]
        }
    },

    methods: {
        onSwiper(swiper) {
        this.swiper = swiper;
        },
    }
}
</script>
