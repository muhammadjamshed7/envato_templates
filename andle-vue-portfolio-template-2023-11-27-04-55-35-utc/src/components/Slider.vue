<template>
    <div class="section slider-section">
        <div class="slider-active">
            <swiper class="mySwiper"
                :breakpoints="swiperOptions.breakpoints"
                :slides-per-view="1"
                :loop="true"
                :effect='fade'
                :navigation="swiperOptions.navigation"
                @swiper="onSwiper"
            >

            <swiper-slide  v-for="(slider, sliders) in sliders" :key="sliders">

                <div class="single-slider d-flex align-items-center animation-style-01" 
                    :style="{backgroundImage: `url(${slider.sliderBg })`}"
                >
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>

                    <div class="container">
                        <!-- Slider Content Start -->
                        <div class="slider-content">
                            <h4 class="sub-title">{{ slider.slidersubTitle }}</h4>
                            <h1 class="main-title" v-html="slider.sliderTitle"></h1>
                            <p v-html="slider.sliderDesc"></p>
                            <router-link to="/projects" class="slider-btn">{{ slider.btntext }}</router-link>
                        </div>
                        <!-- Slider Content End -->
                    </div>
                
                </div>
                
            </swiper-slide>

            </swiper>

            <!-- Add Arrows -->
            
            <div class="swiper-button-next"><i class="icofont-long-arrow-right"></i></div>
            <div class="swiper-button-prev"><i class="icofont-long-arrow-left"></i></div> 
           

        </div>
        
        <!-- Social Start -->
        <ul class="social">
            <li v-for="(social, socials) in slidersocials" :key="socials">
                <a target="_blank" :href="social.link"><i :class="social.classname"></i></a>
            </li>
        </ul>
        <!-- Social End -->
    </div>

</template>

<script>

import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([
    Navigation
]);

import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    name: "App",
    components: {
        Swiper,
        SwiperSlide,
        },

    data() {
        return {
            swiperOptions: {
                breakpoints: {       
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                    },
                    992: {
                        slidesPerView: 1,
                    },
                },
                navigation: {
                    nextEl: '.slider-active .swiper-button-next',
                    prevEl: '.slider-active .swiper-button-prev'
                }
            },
            sliders: [
                {
                    sliderBg: "/images/slider/slider-1.jpg",
                    slidersubTitle: 'Latest project',
                    sliderTitle: 'Bowmore Wine <br> Rebranding',
                    sliderDesc: 'Combine with ideas of owner, Dustin Mahone. <br> Arquito’s team completed a super villa with many powerful features, <br> help owner really enjoy his life beside the beach',
                    btntext: 'See Project'
                },
                {
                    sliderBg: "/images/slider/slider-1.jpg",
                    slidersubTitle: 'Latest project',
                    sliderTitle: 'Bowmore Wine <br> Rebranding',
                    sliderDesc: 'Combine with ideas of owner, Dustin Mahone. <br> Arquito’s team completed a super villa with many powerful features, <br> help owner really enjoy his life beside the beach',
                    btntext: 'See Project'
                }
            ],
            slidersocials: [
                {
                    link: "https://facebook.com/",
                    classname: "fa fa-facebook-f"
                },
                {
                    link: "https://twitter.com/",
                    classname: "fa fa-twitter"
                },
                {
                    link: "https://www.behance.net/",
                    classname: "fa fa-behance"
                }
            ]
        };
    },

    methods: {
        onSwiper(swiper) {
        this.swiper = swiper;
        }
    }

};

</script>



