<template>
    <div class="section">
        <div class="container">
            <!-- Counter Start -->
            <div class="counter-section">
                <div class="row row-cols-sm-3 row-cols-1">
                    <div class="col">
                        
                        <!-- Counter Box Start -->
                        <div class="counter-box  wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="2s">
                            <div class="counter-count">
                                <vue3-autocounter class="count odometer"  ref='counter' :startAmount='0' :endAmount='8000' :duration='3'/>
                            </div>
                            <div class="counter-content">
                                <p>Partner <br> worldwide</p>
                            </div>
                            
                        </div>
                        <!-- Counter Box End -->

                    </div>
                    <div class="col">
                        <!-- Counter Box Start -->
                        <div class="counter-box  wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="2s">
                            <div class="counter-count">
                                <vue3-autocounter class="count odometer"  ref='counter' :startAmount='0' :endAmount='1250' :duration='3'/>
                            </div>
                            <div class="counter-content">
                                <p>employees and <br> staffs</p>
                            </div>
                        </div>
                        <!-- Counter Box End -->
                    </div>
                    <div class="col">
                        <!-- Counter Box Start -->
                        <div class="counter-box  wow fadeInUp" data-wow-delay="0.9s" data-wow-duration="2s">
                            <div class="counter-count">
                                <vue3-autocounter class="count odometer"  ref='counter' :startAmount='0' :endAmount='904' :duration='3'/>
                            </div>
                            <div class="counter-content">
                                <p>project completed <br> on 60 countries</p>
                            </div>
                        </div>
                        <!-- Counter Box End -->
                    </div>
                </div>
            </div>
            <!-- Counter End -->
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import Vue3autocounter from 'vue3-autocounter'
export default defineComponent({
    name: 'Demo',
    components: {
        'vue3-autocounter': Vue3autocounter
    },
});

</script>
