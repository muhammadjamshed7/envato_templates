<template>
    <!-- Contact Start -->
    <div class="section contact-section">
        <div class="contact-bg"  :style="{backgroundImage: `url(${ contactBg })`}"></div>

        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-7">

                    <!-- Contact Section Wrapper Start -->
                    <div class="contact-section-wrapper wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1.5s">

                        <!-- Contact Info Start -->
                        <div class="contact-info">
                            <span class="mail"><a href="mailto:hello@andle.com">hello@andle.com</a></span>
                            <span class="number"><a href="tel:+056563383849">(+056) 563 38 38 49</a></span>
                        </div>
                        <!-- Contact Info End -->

                        <!-- Contact Form Start -->
                        <div class="contact-form">
                            <form id="contact-form" 
                                action="https://getform.io/f/6af30b8c-e767-4d30-b964-d7e38d35078b" 
                                method="POST"
                            >
                                <div class="row">
                                    <div class="col-md-6">

                                        <!-- Single Form Start -->
                                        <div class="single-form">
                                            <input type="text" name="name" placeholder="Enter your name..." required>
                                        </div>
                                        <!-- Single Form Start -->

                                    </div>
                                    <div class="col-md-6">
                                        <!-- Single Form Start -->
                                        <div class="single-form">
                                            <input type="email" name="email" placeholder="youemail@domain.com" required>
                                        </div>
                                        <!-- Single Form Start -->
                                    </div>
                                    <div class="col-md-12">
                                        <!-- Single Form Start -->
                                        <div class="single-form">
                                            <input type="text" name="subject" placeholder="Subject (optional)" required>
                                        </div>
                                        <!-- Single Form Start -->
                                    </div>
                                    <div class="col-md-12">
                                        <!-- Single Form Start -->
                                        <div class="single-form">
                                            <textarea name="message" placeholder="Here goes your message"></textarea>
                                        </div>
                                        <!-- Single Form Start -->
                                    </div>
                                    <p class="form-message"></p>
                                    <div class="col-md-12">
                                        <!-- Single Form Start -->
                                        <div class="form-btn">
                                            <button type="submit">Send Message</button>
                                        </div>
                                        <!-- Single Form Start -->
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- Contact Form End -->

                        <!-- Contact Social Start -->
                        <div class="contact-social">
                            <ul>
                                <li v-for="(social, socials) in socials" :key="socials">
                                    <a target="_blank" :class="social.classname" :href="social.link">{{social.text}}</a>
                                </li>
                            </ul>
                        </div>
                        <!-- Contact Social End -->

                    </div>
                    <!-- Contact Section Wrapper End -->

                </div>
            </div>
        </div>

    </div>
    <!-- Contact End -->
</template>

<script>

export default {

    data() {
        return {
            socials: [
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
            contactBg: "/images/contact-bg.jpg",
        };
    },

    methods: {
        onSwiper(swiper) {
        this.swiper = swiper;
        }
    }

};

</script>