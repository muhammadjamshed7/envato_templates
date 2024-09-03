<template>
    <router-view />
    <back-to-top bottom="50px" right="50px">
        <button type="button" class="back-top">
            <i class="fa fa-chevron-up"></i>
        </button>
    </back-to-top>
</template>
<style lang="scss">
.back-top {
    background-color: #89715b;
    color: #fff;
    width: 50px;
    height: 50px;
    line-height: 50px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    font-size: 14px;
    z-index: 18;
    border: 0px;
}
</style>