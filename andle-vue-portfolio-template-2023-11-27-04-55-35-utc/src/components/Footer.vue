<template>
    <!-- Footer Start -->
    <div class="section bg-dark">
        <div class="container">

            <!-- Footer Info Box Start -->
            <div class="footer-info-box text-center">
                <h4 class="title">Let’s work together</h4>
                <h2 class="mail"><a href="mailto:hello@andle.com">hello@andle.com</a></h2>
            </div>
            <!-- Footer Info Box End -->

            <!-- Footer Copyright & Social Start -->
            <div class="footer-copyright-social">
                <div class="footer-copyright">
                    <p>&copy; 2021 <span> Andle</span> Made with <i class="icofont-heart" aria-hidden="true"></i> by <a href="https://themeforest.net/user/codecarnival/portfolio" target="_blank">Codecarnival</a></p>
                </div>
                <div class="footer-social">
                    <ul class="social">
                        <li v-for="(social, socials) in footersocials" :key="socials">
                            <a target="_blank" :class="social.classname" :href="social.link">{{social.text}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Footer Copyright & Social End -->

        </div>
    </div>
    <!-- Footer End -->
</template>

<script> 
export default {
    data () {
        return {
            footersocials: [
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
                },
                {
                    classname: "github",
                    link: "https://github.com/",
                    text: "Github"
                }
            ],
        }
    }
}
</script>
