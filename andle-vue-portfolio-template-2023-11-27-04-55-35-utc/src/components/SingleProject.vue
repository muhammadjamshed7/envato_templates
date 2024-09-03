<template>

    <!-- Page Banner Start -->
    <div class="section">
        <div class="container">

            <!-- Page Banner Title Start -->
            <div class="page-banner-title">
                <h2 class="title">{{ preview.name }}</h2>
                <p>{{ preview.category }}</p>
            </div>
            <!-- Page Banner Title End -->

        </div>
    </div>
    <!-- Page Banner End -->

    <!-- Project Details Section Start -->
    <div class="section project-details-section pb-10">

        <div class="custom-container container-fluid">

            <!-- Details Images Start -->
            <div class="details-images">
                <img src="/images/project-details/project-details.jpg" alt="Project Details">
            </div>
            <!-- Details Images End -->

        </div>

        <div class="container">

            <!-- Details Challenge Start  -->
            <div class="details-challenge section-padding-02 mt-n1">
                <h1 class="title">{{ preview.name }}</h1>
            </div>
            <!-- Details Challenge End  -->

            <!-- Details Info Start  -->
            <div class="details-info section-padding mt-n10">
                <div class="row">
                    <div v-for="detail in details" :key="detail" class="col-lg-3">

                        <!-- Single Info Start  -->
                        <div class="single-info">
                            <h5 class="details-label">{{detail.label}}</h5>
                            <p v-html="detail.text"></p>
                        </div>
                        <!-- Single Info Start  -->

                    </div>
                </div>
            </div>
            <!-- Details Info End  -->

            <!-- Details Middle Content Start  -->
            <div class="details-middle-content section-padding-02 mt-n2">
                <h2 class="title">Ideas & Concept</h2>
                <p>Edden’s Villa is an international project located in Costa Rica. It has various different levels, whom are embedded into the unevenness of the terrain. This project seeks to integrate passive strategies for energy saving, such as the inclusion of as much natural light as possible as well as having green roofs with lots of vegetation in them. <br> The geometry of this house combines design with nature into the structure of the house, which makes it unique amongst other neighboring places.</p>
            </div>
            <!-- Details Middle Content End  -->

        </div>

        <div class="custom-container container-fluid">

            <!-- Colum images Start  -->
            <div class="column-images">
                <div class="row">
                    <div class="col-lg-6">
                        <!-- Details Images Start -->
                        <div class="details-images mt-6 wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1.5s">
                            <img src="/images/project-details/dec-images-1.jpg" alt="Project Details">
                        </div>
                        <!-- Details Images End -->
                    </div>
                    <div class="col-lg-6">
                        <!-- Details Images Start -->
                        <div class="details-images mt-6 wow fadeInRight" data-wow-delay="0.3s" data-wow-duration="1.5s">
                            <img src="/images/project-details/dec-images-2.jpg" alt="Project Details">
                        </div>
                        <!-- Details Images End -->
                    </div>
                </div>
            </div>
            <!-- Colum images End  -->

        </div>

        <div class="container mb-10">

            <!-- Blockquote Start  -->
            <div class="blockquote section-padding-02  mt-n3">
                <p>“This is the testimonial or review from clients, then will <br> is lorem ispum dolor sit amet, consectetur adipiscing elit  sed do <br> eiusmod tempor incididunt ut labore.” </p>
            </div>
            <!-- Blockquote End  -->

            <!-- Author Info Start  -->
            <div class="author-info">
                <h4 class="name">Adam Levine</h4>
                <p>Director of Poland ATA Finance Banking</p>
            </div>
            <!-- Author Info End  -->

            <!-- Details Images Start -->
            <div class="details-images section-padding-02 mt-n2">
                <img src="/images/project-details/dec-images-3.jpg" alt="Project Details">
            </div>
            <!-- Details Images End -->

            <!-- Details Social Start -->
            <div class="details-social">
                <h5 class="details-label">Share on social</h5>
                <ul class="social">
                    <li v-for="(social, socials) in projectsocials" :key="socials">
                        <a target="_blank" :class="social.classname" :href="social.link"><i :class="social.text"></i></a>
                    </li>
                </ul>
            </div>
            <!-- Details Social End -->

            <!-- Reservation Form Start -->
            <div class="reservation-form-wrapper section-padding-02">
                <h3 class="title">Let’s start work together</h3>

                <div class="reservation-form wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1s">
                    <form action="#">
                        <div class="row gx-10">
                            <div class="col-md-4">
                                <!-- Single Form Start -->
                                <div class="single-form">
                                    <input type="text" placeholder="Enter your name...">
                                </div>
                                <!-- Single Form Start -->
                            </div>
                            <div class="col-md-4">
                                <!-- Single Form Start -->
                                <div class="single-form">
                                    <input type="email" placeholder="youemail@domain.com">
                                </div>
                                <!-- Single Form Start -->
                            </div>
                            <div class="col-md-4">
                                <!-- Single Form Start -->
                                <div class="single-form">
                                    <input type="text" placeholder="Subject (optional)">
                                </div>
                                <!-- Single Form Start -->
                            </div>
                            <div class="col-md-12">
                                <!-- Single Form Start -->
                                <div class="single-form">
                                    <textarea placeholder="Here goes your message"></textarea>
                                </div>
                                <!-- Single Form Start -->
                            </div>
                        </div>
                    </form>
                </div>

            </div>
            <!-- Reservation Form End -->

        </div>

    </div>
    <!-- Project Details Section End -->

</template>

<script>
export default {
    data () {
        return{
            id: this.$route.params.id,
            previews: [
                {
                    id: 1,
                    imgSrc: "/images/project/project-1.jpg",
                    alt: 'Project Image',
                    name: 'Figma Free UI Kit',
                    href: '/projectdetails',
                    category: 'Web Design'
                },
                {
                    id: 2,
                    imgSrc: "/images/project/project-2.jpg",
                    alt: 'Project Image',
                    name: 'AZA Social App',
                    href: '/projectdetails',
                    category: 'Branding'
                },
                {
                    id: 3,
                    imgSrc: "/images/project/project-3.jpg",
                    alt: 'Project Image',
                    name: 'Allen Carter Business Card',
                    href: '/projectdetails',
                    category: 'Mobile App'
                },
                {
                    id: 4,
                    imgSrc: "/images/project/project-4.jpg",
                    alt: 'Project Image',
                    name: 'CBD Gummies',
                    href: '/projectdetails',
                    category: 'Motion'
                },
                {
                    id: 5,
                    imgSrc: "/images/project/project-5.jpg",
                    alt: 'Project Image',
                    name: 'THINK Rebrand',
                    href: '/projectdetails',
                    category: 'Motion'
                },
                {
                    id: 6,
                    imgSrc: "/images/project/project-6.jpg",
                    alt: 'Project Image',
                    name: 'Allen Carter Business Card',
                    href: '/projectdetails',
                    category: 'Branding'
                },
                {
                    id: 7,
                    imgSrc: "/images/project/project-7.jpg",
                    alt: 'Project Image',
                    name: 'B&OPlay Headphone',
                    href: '/projectdetails',
                    category: 'Web Design'
                },
                {
                    id: 8,
                    imgSrc: "/images/project/project-8.jpg",
                    alt: 'Project Image',
                    name: 'Nordic Interior Studio',
                    href: '/projectdetails',
                    category: 'Branding'
                },
                {
                    id: 9,
                    imgSrc: "/images/project/project-9.jpg",
                    alt: 'Project Image',
                    name: 'Allen Carter Business Card',
                    href: '/projectdetails',
                    category: 'Web Design'
                }
            ],
            details: [
                {
                    label: 'the challenge',
                    text: 'Poland ATA Finance <br> Banking',
                },
                {
                    label: 'Date',
                    text: 'March 25, 2024',
                },
                {
                    label: 'team',
                    text: 'Reza - Developer <br> Logan - U/UX Designer <br> Lina - Tester',
                },
                {
                    label: 'Service',
                    text: 'Strategy, UI/UX Interaction, Mobile Design',
                }
            ],
            projectsocials: [
                {
                    classname: "twitter",
                    link: "https://twitter.com/",
                    text: "fa fa-twitter"
                },
                {
                    classname: "behance",
                    link: "https://www.behance.net/",
                    text: "fa fa-behance"
                },
                {
                    classname: "dribbble",
                    link: "https://dribbble.com/",
                    text: "fa fa-dribbble"
                }
            ]
        }
    },
    computed: {
        preview() {
            return this.previews.find(preview => preview.id === Number(this.id))
        }
    }
}
</script>
