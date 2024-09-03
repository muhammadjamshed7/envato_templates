<template>
    <div class="section overflow-hidden bg-dark">
        <!-- About Start -->
        <div class="about-section section-padding mt-n3 mb-n1">
            <div class="about-images" :style="{backgroundImage: `url(${ aboutBg })`}"></div>

            <div class="container">
                <div class="row justify-content-end">
                    <div class="col-lg-6">
                        <div class="about-content wow fadeInRight" data-wow-delay="0.5s" data-wow-duration="2s">
                            <h3 class="title">{{ aboutTitle }}</h3>
                            <p class="about-text">Founded in Lebanon in 1967, Archo Architecture Company (KCC) has grown to become one of the Middle East's leading construction contractors.</p>
                            <p>We specialise in complex and prestigious construction and infrastruc <br> <br> ture projects. Our portfolio includes some of the region’s most iconic landmarks, from super high-rise luxury developments, to  five star hotels, hospitals and intricately sophisticated smart buildings. </p>
                            <p>We have compiled an extensive list of other area clinics and health resources, so that when someone calls</p>
                            <img class="signechar" src="/images/signechar.png" alt="">
                            <h6 class="name">Daniel Jr</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->
    </div>
</template>
<script>
export default {
    data() {
        return { 
            aboutBg: "/images/about-images.png",
            aboutTitle: 'Andle Brewster',
        }
    }
}
</script>
