<template>
        <!-- FAQ's Start -->
        <div class="section section-padding mt-n1 mb-n1">
            <div class="container">

                <!-- Section Title Start -->
                <div class="section-title-2">
                    <h2 class="title">Faq's</h2>
                </div>
                <!-- Section Title End -->

                <!-- FAQ'S Wrapper Start -->
                <div class="faq-wrapper">
                    <div class="row">
                        <div class="col-lg-3">

                            <!-- Faq's Menu Start -->
                            <div class="faq-menu">
                                <ul class="nav flex-column">
                                    <li><a class="active" data-bs-toggle="tab" href="#tab1">General</a></li>
                                    <li><a data-bs-toggle="tab" href="#tab2">Payment</a></li>
                                    <li><a data-bs-toggle="tab" href="#tab3">Support</a></li>
                                    <li><a data-bs-toggle="tab" href="#tab4">Return</a></li>
                                </ul>
                            </div>
                            <!-- Faq's Menu End -->

                        </div>
                        <div class="col-lg-9">

                            <!-- Faq's Content Start -->
                            <div class="tab-content">
                                <div v-for="(faqtab, index) in faqtabs" :key="index" :class="faqtab.classname" :id="faqtab.tabno">

                                    <!-- Single FAQ Start -->
                                    <div class="single-faq" v-for="(singlefaq, index) in faqtab.faqcontent" :key="index">
                                        <h4 class="title">{{singlefaq.title}}</h4>
                                        <p>{{singlefaq.faqtext}}</p>
                                    </div>
                                    <!-- Single FAQ End -->

                                </div>
                            </div>
                            <!-- Faq's Content End -->

                        </div>
                    </div>
                </div>
                <!-- FAQ'S Wrapper End -->

            </div>
        </div>
        <!-- FAQ's End -->
</template>

<script>
export default {
    data () {
        return {
            faqtabs: [
                {
                    classname: 'tab-pane fade show active',
                    tabno: 'tab1',
                    faqcontent: [
                        {
                            title: 'How many landing page I can work with your product?',
                            faqtext: 'You can use our themes on as many site you want. Our theme is 100% GPL & there is not domain restriction. You will receive support for the given domain amount.'
                        },
                        {
                            title: 'Can I use your product for my client?',
                            faqtext: 'Yes, you can. You can work with any type of project without taking our permission.'
                        },
                        {
                            title: 'What happens after my subscription runs out?',
                            faqtext: 'For Template Plans: After your subscription expires, you can still keep using the products you have downloaded from our site. But without an active subscription, you will NOT get updates and technical support from us.'
                        },
                        {
                            title: 'Will Edward oroducts slow down my website?',
                            faqtext: 'No, absolutely not. We are very obsessed about speed and optimization is not after thought for us. We made sure that the designs are almost exclusively CSS, so that no images need to be loaded. We also optimized all the code for the fastest possible loading times.​'
                        }
                    ]
                },
                {
                    classname: 'tab-pane fade',
                    tabno: 'tab2',
                    faqcontent: [
                        {
                            title: 'How many landing page I can work with your product?',
                            faqtext: 'You can use our themes on as many site you want. Our theme is 100% GPL & there is not domain restriction. You will receive support for the given domain amount.'
                        },
                        {
                            title: 'Can I use your product for my client?',
                            faqtext: 'Yes, you can. You can work with any type of project without taking our permission.'
                        },
                        {
                            title: 'What happens after my subscription runs out?',
                            faqtext: 'For Template Plans: After your subscription expires, you can still keep using the products you have downloaded from our site. But without an active subscription, you will NOT get updates and technical support from us.'
                        },
                        {
                            title: 'Will Edward oroducts slow down my website?',
                            faqtext: 'No, absolutely not. We are very obsessed about speed and optimization is not after thought for us. We made sure that the designs are almost exclusively CSS, so that no images need to be loaded. We also optimized all the code for the fastest possible loading times.​'
                        }
                    ]
                },
                {
                    classname: 'tab-pane fade',
                    tabno: 'tab3',
                    faqcontent: [
                        {
                            title: 'How many landing page I can work with your product?',
                            faqtext: 'You can use our themes on as many site you want. Our theme is 100% GPL & there is not domain restriction. You will receive support for the given domain amount.'
                        },
                        {
                            title: 'Can I use your product for my client?',
                            faqtext: 'Yes, you can. You can work with any type of project without taking our permission.'
                        },
                        {
                            title: 'What happens after my subscription runs out?',
                            faqtext: 'For Template Plans: After your subscription expires, you can still keep using the products you have downloaded from our site. But without an active subscription, you will NOT get updates and technical support from us.'
                        },
                        {
                            title: 'Will Edward oroducts slow down my website?',
                            faqtext: 'No, absolutely not. We are very obsessed about speed and optimization is not after thought for us. We made sure that the designs are almost exclusively CSS, so that no images need to be loaded. We also optimized all the code for the fastest possible loading times.​'
                        }
                    ]
                },
                {
                    classname: 'tab-pane fade',
                    tabno: 'tab4',
                    faqcontent: [
                        {
                            title: 'How many landing page I can work with your product?',
                            faqtext: 'You can use our themes on as many site you want. Our theme is 100% GPL & there is not domain restriction. You will receive support for the given domain amount.'
                        },
                        {
                            title: 'Can I use your product for my client?',
                            faqtext: 'Yes, you can. You can work with any type of project without taking our permission.'
                        },
                        {
                            title: 'What happens after my subscription runs out?',
                            faqtext: 'For Template Plans: After your subscription expires, you can still keep using the products you have downloaded from our site. But without an active subscription, you will NOT get updates and technical support from us.'
                        },
                        {
                            title: 'Will Edward oroducts slow down my website?',
                            faqtext: 'No, absolutely not. We are very obsessed about speed and optimization is not after thought for us. We made sure that the designs are almost exclusively CSS, so that no images need to be loaded. We also optimized all the code for the fastest possible loading times.​'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
