<template>
    <!-- Pricing Table Start -->
    <div class="section">
        <div class="container">

            <!-- Pricing Table Wrapper Start -->
            <div class="pricing-table-wrapper">
                <div class="row gx-0">
                    <div class="col-md-4" v-for="(pricing, index) in pricingTable" :key="index">

                        <!-- Single Pricing Start -->
                        <div class="single-pricing-box">
                            <div class="pricing-iner wow fadeInLeft" data-wow-delay="0.3s" data-wow-duration="1.5s">
                                <div class="popular">{{pricing.populartext}}</div>
                                <div class="icon-box">
                                    <i :class="pricing.iconclass"></i>
                                </div>
                                <h4 class="title">{{pricing.title}}</h4>
                                <div class="price"><sup>$</sup>{{pricing.price}}<span>/ month</span></div>
                                <ul class="price-list">
                                    <li>{{pricing.listtitle}}</li>
                                    <li v-html="pricing.listtext"></li>
                                </ul>
                                <router-link to="/contact" class="btn btn-outline-primary d-block">{{pricing.btntext}}</router-link>
                            </div>
                        </div>
                        <!-- Single Pricing End -->

                    </div>
                </div>
            </div>
            <!-- Pricing Table Wrapper End -->

        </div>
    </div>
    <!-- Pricing Table End -->
</template>

<script>
    export default {
        data () {
            return {
                pricingTable: [
                    {
                        title: 'Personal',
                        iconclass: 'fa fa-paper-plane-o',
                        price: 9.99,
                        listtitle: 'Custom Domains',
                        listtext: 'Sleep after 30 mins of <br> activity',
                        btntext: 'Contact Me now'
                    },
                    
                    {
                        title: 'Small Team',
                        populartext: "popular",
                        price: 49.99,
                        iconclass: 'fa fa-plane',
                        listtitle: 'Never Sleeps',
                        listtext: 'multiple workers for more <br> powerful apps',
                        btntext: 'Contact Me now'
                    },
                    
                    {
                        title: 'Enterprise',
                        price: 99.99,
                        iconclass: 'fa fa-rocket',
                        listtitle: 'Dedicated',
                        listtext: 'simple horizontal <br> scalability',
                        btntext: 'Contact Me now'
                    }
                ]
            }
        }
    }
</script>
