<template>
    <!-- Work Start -->
    <div class="section section-padding-02">
        <div class="container">
            <div class="row align-items-end mt-n10">

                <div class="col-xl-3 col-lg-4">

                    <!-- Section Title Start -->
                    <div class="section-title mt-5">
                        <h2 class="title">Works</h2>
                    </div>
                    <!-- Section Title End -->

                </div>

                <div class="col-xl-9 col-lg-8">

                    <!-- Work Tab Menu Start -->
                    <div class="work-tabs-menu mt-5">
                        <ul class="nav">
                            <li><a class="active" data-bs-toggle="tab" href="#tab1">Design</a></li>
                            <li><a data-bs-toggle="tab" href="#tab2">architecture</a></li>
                            <li><a data-bs-toggle="tab" href="#tab3">interior</a></li>
                            <li><a data-bs-toggle="tab" href="#tab4">landscape</a></li>
                        </ul>
                    </div>
                    <!-- Work Tab Menu End -->

                </div>
                
            </div>
        </div>

        <!-- Work tabs Content Start -->
        <div class="work-tab-content">
            <div class="tab-content">
                <div v-for="(worktab, index) in allwork" :key="index" :class="worktab.classname" :id="worktab.tabno">

                    <!-- Tab Carousel Start  -->
                    <div class="tab-carousel">

                            <swiper 
                                :breakpoints="swiperOptions.breakpoints"
                                :slides-per-view="4"
                                :spaceBetween="1"
                                :loop="true"
                                :pagination="{ clickable: true }"
                                :navigation="swiperOptions.navigation"
                                @swiper="onSwiper"
                            >
                                <swiper-slide class="swiper-slide" v-for="(tabCarousel, index) in worktab.workCarousel" :key="index">

                                    <!-- Single Project Slide Start -->
                                    <div class="single-project-slide">

                                        <!-- Thumb Start -->
                                        <div class="thumb">
                                            <router-link to="/project/1" class="image">
                                                <img class="fit-image" :src="tabCarousel.imgSrc" :alt="tabCarousel.alt" />
                                            </router-link>
                                        </div>
                                        <!-- Thumb End -->

                                        <!-- Content Start -->
                                        <div class="content">
                                            <h4 class="subtitle">{{tabCarousel.subtitle}}</h4>
                                            <h3 class="title"><router-link to="/project/1">{{tabCarousel.title}}</router-link></h3>
                                        </div>
                                        <!-- Content End -->

                                    </div>
                                    <!-- Single Project Slide End -->

                                </swiper-slide>
                            </swiper>

                            <!-- Swiper Pagination Start -->
                            <div class="swiper-pagination d-none"></div>
                            <!-- Swiper Pagination End -->

                            <!-- Swiper Navigation Start -->
                            <div class="tab-carousel-prev swiper-button-prev"><i class="icofont-thin-left"></i></div>
                            <div class="tab-carousel-next swiper-button-next"><i class="icofont-thin-right"></i></div>
                            <!-- Swiper Navigation End -->
                            
                    </div>
                    <!-- Tab Carousel Start  -->

                </div>
            </div>
        </div>
        <!-- Work tabs Content End -->

    </div>
    <!-- Work End -->

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
                    0: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    576: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 4,
                    }
                },
                navigation: {
                    nextEl: '.tab-carousel .tab-carousel-next',
                    prevEl: '.tab-carousel .tab-carousel-prev'
                }
            },

            allwork: [
                {
                    classname: "tab-pane fade show active",
                    tabno: "tab1",
                    workCarousel: [
                        {
                            imgSrc: "/images/work/work-1.jpg",
                            alt: "Tab Image",
                            subtitle: 'Residential',
                            title: 'Cubic Villa'
                        },
                        {
                            imgSrc: "/images/work/work-2.jpg",
                            alt: "Tab Image",
                            subtitle: 'Architecture',
                            title: 'Obero'
                        },
                        {
                            imgSrc: "/images/work/work-3.jpg",
                            alt: "Tab Image",
                            subtitle: 'Commercial',
                            title: 'ABC Financial Bank'
                        },
                        {
                            imgSrc: "/images/work/work-4.jpg",
                            alt: "Tab Image",
                            subtitle: 'Interior',
                            title: 'B6-No.5 OLA Tower'
                        }
                    ]
                },
                {
                    classname: "tab-pane",
                    tabno: "tab2",
                    workCarousel: [
                        {
                            imgSrc: "/images/work/1-1.jpg",
                            alt: "Tab Image",
                            subtitle: 'Residential',
                            title: 'Cubic Villa'
                        },
                        {
                            imgSrc: "/images/work/1-2.jpg",
                            alt: "Tab Image",
                            subtitle: 'Architecture',
                            title: 'Obero'
                        },
                        {
                            imgSrc: "/images/work/1-3.jpg",
                            alt: "Tab Image",
                            subtitle: 'Commercial',
                            title: 'ABC Financial Bank'
                        },
                        {
                            imgSrc: "/images/work/1-4.jpg",
                            alt: "Tab Image",
                            subtitle: 'Interior',
                            title: 'B6-No.5 OLA Tower'
                        }
                    ]
                },
                {
                    classname: "tab-pane",
                    tabno: "tab3",
                    workCarousel: [
                        {
                            imgSrc: "/images/work/2-1.jpg",
                            alt: "Tab Image",
                            subtitle: 'Residential',
                            title: 'Cubic Villa'
                        },
                        {
                            imgSrc: "/images/work/2-2.jpg",
                            alt: "Tab Image",
                            subtitle: 'Architecture',
                            title: 'Obero'
                        },
                        {
                            imgSrc: "/images/work/2-3.jpg",
                            alt: "Tab Image",
                            subtitle: 'Commercial',
                            title: 'ABC Financial Bank'
                        },
                        {
                            imgSrc: "/images/work/2-4.jpg",
                            alt: "Tab Image",
                            subtitle: 'Interior',
                            title: 'B6-No.5 OLA Tower'
                        }
                    ]
                },
                {
                    classname: "tab-pane",
                    tabno: "tab4",
                    workCarousel: [
                        {
                            imgSrc: "/images/work/3-1.jpg",
                            alt: "Tab Image",
                            subtitle: 'Residential',
                            title: 'Cubic Villa'
                        },
                        {
                            imgSrc: "/images/work/3-2.jpg",
                            alt: "Tab Image",
                            subtitle: 'Architecture',
                            title: 'Obero'
                        },
                        {
                            imgSrc: "/images/work/3-3.jpg",
                            alt: "Tab Image",
                            subtitle: 'Commercial',
                            title: 'ABC Financial Bank'
                        },
                        {
                            imgSrc: "/images/work/3-4.jpg",
                            alt: "Tab Image",
                            subtitle: 'Interior',
                            title: 'B6-No.5 OLA Tower'
                        }
                    ]
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

