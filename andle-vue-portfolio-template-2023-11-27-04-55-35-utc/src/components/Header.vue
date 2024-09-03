<template>

    <!-- Header Start  -->
    <div class="header fixed-top" :class="{'sticky': isSticky}">
        <div class="container custom-container">
            <div class="header-wrapper">

                <!-- header Logo Start -->
                <div class="logo-box">
                    <div class="logo">
                        <router-link to="/"><img src="/images/logo.png" alt="" title=""></router-link>
                    </div>
                </div>
                <!-- header Logo end -->

                <!-- header Menu Toggler Start -->
                    <button class="header-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span class="fa fa-bars"></span>
                    </button>
                <!-- header Menu Toggler end -->

            </div>

        </div>
    </div>
    <!-- Header End -->

</template>

<script>

    export default {

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        }
    };
    
</script>

<style lang="scss">
.header{
    &.fixed-top {
        z-index: 99;
    }
}
.header-toggler {
    background: transparent;
    border: 0px;
    color: #fff;
    font-size: 26px;
    &:hover {
        color: #6e5a49;
    }
}
</style>
