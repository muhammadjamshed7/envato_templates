<template>

    <div class="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <router-link to="/" class="offcanvas-title" id="offcanvasRightLabel"><img src="/images/logo-2.png" alt="" title=""></router-link>
            <button class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body p-0">

            <div class="mobile-navigation">
                <nav class="offcanvas-navigation" id="offcanvas-navigation">
                    <ul class="offcanvas-navigation__menu">
                        <li class="menu-item-has-children">
                            <router-link to="/">Home</router-link>
                        </li>

                        <li class="menu-item-has-children">
                            <router-link to="/about">About Us </router-link>
                            <ul class="sub-menu">
                                <li>
                                    <router-link to="/about">About </router-link>
                                </li>
                                <li>
                                    <router-link to="/pricing">Pricing </router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="menu-item-has-children">
                            <router-link to="/projects">Project</router-link>
                            <ul class="sub-menu">
                                <li>
                                    <router-link to="/projects">Project</router-link>
                                </li>
                                <li>
                                    <router-link to="/project/1">Project Details</router-link>
                                </li>
                            </ul>
                        </li>

                        <li class="menu-item-has-children">
                            <router-link to="/blog">Blog</router-link>
                            <ul class="sub-menu">
                                <li>
                                    <router-link to="/blog">Blog</router-link>
                                </li>
                                <li>
                                    <router-link to="/blog/1">Blog Details</router-link>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <router-link to="/contact">Contact Us</router-link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>

    <!-- overly Start -->
    <!-- <div class="overlay"></div> -->
    <!-- overly End -->
</template>

<script>

    export default{
        name: 'MobileNavMenu',
        mounted() {
            const offCanvasNav = document.querySelector('#offcanvas-navigation');
            const offCanvasNavSubMenu = offCanvasNav.querySelectorAll('.sub-menu');
            const anchorLinks = offCanvasNav.querySelectorAll('a');
        
            for (let i = 0; i < offCanvasNavSubMenu.length; i++){
                offCanvasNavSubMenu[i].insertAdjacentHTML("beforebegin", "<span class='menu-expand'><i></i></span>");
            }
        
            const menuExpand = offCanvasNav.querySelectorAll('.menu-expand');
            const numMenuExpand = menuExpand.length;
        
            for (let i = 0; i < numMenuExpand; i++) {
                menuExpand[i].addEventListener("click", (e) => {sideMenuExpand(e)});
            }
        
            for (let i = 0; i < anchorLinks.length; i++) {
                anchorLinks[i].addEventListener("click", () => {closeMobileMenu()});
            }

            const sideMenuExpand = (e) => {
                e.currentTarget.parentElement.classList.toggle('active');
            }
            const closeMobileMenu = () => {
                const offcanvasMobileMenu = document.querySelector('#offcanvas-mobile-menu');
                offcanvasMobileMenu?.classList.remove('active');
            }
        }
    };
</script>

<style lang="scss">
.offcanvas{
    &.offcanvas-end {
        width: 300px;
    }
}
.offcanvas-navigation {
    &__menu{
        margin-top: 30px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
     ul {
        padding-left: 0;
        li {
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            &.menu-item-has-children {
                .sub-menu {
                    height: 0;
                    opacity: 0;
                    transition: 0.3s;
                    visibility: hidden;
                }
                &.active > {
                    .sub-menu {
                        height: 100%;
                        opacity: 1;
                        visibility: visible;
                        padding-left: 0;
                    }
                }
            }
            a {
                color: #000000;
                font-size: 16px;
                font-weight: 500;
                padding: 10px 10px 10px 20px;
                display: block;
                &:hover {
                    color: #6e5a49;
                }
            }
        }
    }

    ul {
        &.sub-menu {
            margin-left: 15px;
            transition: 0.4s;
            li {
                list-style: none;
                border: none;
                a {
                    color: #000000;
                    font-weight: 400;
                    &:hover {
                        color: #6e5a49;
                    }
                }
                .sub-menu {
                    li {
                        a {
                            font-size: 13px;
                            padding: 5px 0;
                        }
                    }
                }
            }
        }
        li {
            &.menu-item-has-children {
                position: relative;
                display: block;
                a {
                    display: inline-block;
                }

                &.active > {
                    .menu-expand {
                        background-color: rgba(0, 0, 0, 0.2);
                        i {
                            &:before {
                                transform: rotate(0);
                            }
                        }
                    }
                }

                .menu-expand {
                    top: 5px;
                    right: 0;
                    width: 35px;
                    height: 35px;
                    cursor: pointer;
                    line-height: 35px;
                    position: absolute;
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.1);
                    &:hover {
                        background-color: rgba(0, 0, 0, 0.2);
                    }

                    i {
                        display: block;
                        border-bottom: 1px solid #000000;
                        position: relative;
                        width: 10px;
                        text-align: center;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        &:before {
                            width: 100%;
                            content: "";
                            border-bottom: 1px solid #000000;
                            display: block;
                            position: absolute;
                            top: 0;
                            transform: rotate(90deg);
                            transition: 0.4s;
                        }
                    }
                }
            }
        }
    }
}
</style>
