<template>
    <!-- Project Start -->
    <div class="section pb-10">

        <div class="container">

            <!-- Page Banner Title Start -->
            <div class="page-banner-title">
                <h2 class="title">Time to write, share & discuss</h2>
            </div>
            <!-- Page Banner Title End -->

            <!-- Filter  Section Start -->
            <div class="filter-menu">
                <ul class="menu-list">
                    <li @click="filter('all')" :class="{active: selectedCat === 'all'}">All</li>
                    <li v-for="(item, index) in categories" :key="index" @click="filter(item)" :class="{active: selectedCat === item}">
                        {{item}}
                    </li>
                </ul>
            </div>
            <!-- Filter  Section End -->

        </div>

        <div class="container">

            <!-- Blog Section Start -->
            <div class="blog-section mt-n4 mb-10">
                <div class="row">

                    <div v-for="(blog, index) in blogs.blogs" :key="index" :class="blog.column">

                        <!-- Single Project Start -->
                        <div v-if="selectedCat === blog.category || selectedCat === 'all'" :class="'blog ' + blog.category">
                            <div class="single-blog">

                                <div class="blog-images">
                                    <router-link :to="`/blog/${blog.id}`"><img :src="`${blog.imgSrc}`" :alt="blog.alt"></router-link>
                                </div>
 
                                <div class="blog-content">
                                    <ul class="meta">
                                        <li><span>{{blog.category}}</span></li>
                                        <li><span>{{blog.date}}</span></li>
                                        <li><span>{{blog.admin}}</span></li>
                                    </ul>
                                    <h3 class="title">
                                        <router-link :to="`/blog/${blog.id}`">{{blog.title}}</router-link>
                                    </h3>

                                    <p>{{blog.content}}</p>

                                </div>

                            </div>
                        </div>
                        <!-- Single Project End -->

                    </div>

                </div>
            </div>
            <!-- Blog Section End -->

        </div>

    </div>
    <!-- Project End -->
</template>

<script>

import blogs from '../data/blog.json'

export default {
    el: '#app',
    data () {
        return {
            blogs,
            selectedCat: 'all',
            categories: []
        }
    },
    methods: {
        filter(selection) {
            this.selectedCat = selection;
        },
        shuffle: function () {
            this.blogs = _.shuffle(this.blogs.blogs).groupBy('category')
        },
        filterCategories: function(){
            this.categories = [...new Set(this.blogs.blogs.map(item => item.category))];
        }
    },
    mounted(){
        this.filterCategories();
    }
}
</script>

<style lang="scss">
    .singleproject-view:empty {
        display: none;
    };
    .blog {
        opacity: 0;
        animation: appear .5s ease-in-out forwards;
    };
    @keyframes appear {
        to {
            width: 100%;
            opacity: 1;
        }
    }
    .meta {
        li {
            span {
                font-size: 13px;
                color: hsla(0,0%,100%,.5);
                text-transform: uppercase;
            }
        }
    }

</style>