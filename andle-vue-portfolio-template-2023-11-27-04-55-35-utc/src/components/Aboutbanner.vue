<template>
    <!-- About Banner Start -->
    <div class="section about-banner-section overflow-hidden">

        <!-- About Banner Start -->
        <div class="about-banner d-flex align-items-center">
            <div class="container">

                <!-- About Banner Content Start -->
                <div class="about-banner-content">
                    <h1 class="banner-title"><span>Hallo!</span> I am Reza, <br> Interactive Developer based <br> in Ukraine.</h1>

                    <div class="banner-social">
                        <p>See bits and pieces of his design work and prototyping on</p>
                        <ul>
                            <li v-for="(social, socials) in bannersocialtext" :key="socials">
                                <a target="_blank" :class="social.classname" :href="social.link">{{social.text}}</a>
                            </li>
                        </ul>
                    </div>

                    <div class="banner-service">
                        <div class="section-title-2">
                            <h2 class="title">Service</h2>
                        </div>
                        <h4 class="service-text"> <router-link to="/contact">UI/UX Interactive, Mobile App & <br> Video Animator</router-link></h4>
                    </div>
                </div>
                <!-- About Banner Content End -->

            </div>

            <!-- About Banner Image Start -->
            <div class="about-banner-image">
                <img src="/images/about-images-2.jpg" alt="">
            </div>
            <!-- About Banner Image End -->

        </div>
        <!-- About Banner End -->

        <!-- Social Start -->
        <ul class="social">
            <li v-for="(social, socials) in bannersocialico" :key="socials">
                <a target="_blank" :href="social.link"><i :class="social.classname"></i></a>
            </li>
        </ul>
        <!-- Social End -->

    </div>
    <!-- About Banner End -->
</template>


<script>
export default {
    data () {
        return {
            bannersocialtext: [
                {
                    classname: "twitter",
                    link: "https://twitter.com/",
                    text: "Twitter"
                },
                {
                    classname: "behance",
                    link: "https://www.behance.net/",
                    text: "Behance"
                },
                {
                    classname: "dribbble",
                    link: "https://dribbble.com/",
                    text: "Dribbble"
                }
            ],

            bannersocialico: [
                {
                    classname: "fa fa-twitter",
                    link: "https://twitter.com/",
                    text: "Twitter"
                },
                {
                    classname: "fa fa-facebook-f",
                    link: "https://www.facebook.com/",
                },
                {
                    classname: "fa fa-behance",
                    link: "https://www.behance.net/",
                }
            ]
        }
    }
}
</script>