<template>
    <!-- Project Start -->
    <div class="section pb-10">

        <div class="container">
            
            <!-- Page Banner Title Start -->
            <div class="page-banner-title">
                <h2 class="title"> Latest Projects</h2>
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
        
        <div class="custom-container container-fluid">

            <!-- Project Section Start -->
            <div class="project-section mt-n4 mb-10">
                <div class="project-responsive row">

                    <div v-for="preview in previews" :key="preview" class="singleproject-view col-xl-4 col-md-6">

                        <!-- Single Project Start -->
                        <div v-if="selectedCat === preview.category || selectedCat === 'all'" :class="'preview ' + preview.category">
                            <div class="single-project">
                                <div class="project-images">
                                    <router-link :to="`/project/${preview.id}`"><img :src="preview.imgSrc" :alt="preview.alt"></router-link>
                                </div>
                                <div class="project-content">
                                    <h4 class="title">
                                        <router-link :to="`/project/${preview.id}`">{{preview.name}}</router-link>
                                    </h4>
                                    <p class="category">{{preview.category}}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Single Project End -->

                    </div>

                </div>
            </div>
            <!-- Project Section End -->

        </div>

    </div>
    <!-- Project End -->
</template>

<script>
export default {
    el: '#app',
    data () {
        return{
            previews: [
                {
                    id: 1,
                    imgSrc: "/images/project/project-1.jpg",
                    alt: 'Project Image',
                    name: 'Figma Free UI Kit',
                    category: 'Web Design'
                },
                {
                    id: 2,
                    imgSrc: "/images/project/project-2.jpg",
                    alt: 'Project Image',
                    name: 'AZA Social App',
                    category: 'Branding'
                },
                {
                    id: 3,
                    imgSrc: "/images/project/project-3.jpg",
                    alt: 'Project Image',
                    name: 'Allen Carter Business Card',
                    category: 'Mobile App'
                },
                {
                    id: 4,
                    imgSrc: "/images/project/project-4.jpg",
                    alt: 'Project Image',
                    name: 'CBD Gummies',
                    category: 'Motion'
                },
                {
                    id: 5,
                    imgSrc: "/images/project/project-5.jpg",
                    alt: 'Project Image',
                    name: 'THINK Rebrand',
                    category: 'Motion'
                },
                {
                    id: 6,
                    imgSrc: "/images/project/project-6.jpg",
                    alt: 'Project Image',
                    name: 'Allen Carter Business Card',
                    category: 'Branding'
                },
                {
                    id: 7,
                    imgSrc: "/images/project/project-7.jpg",
                    alt: 'Project Image',
                    name: 'B&OPlay Headphone',
                    category: 'Web Design'
                },
                {
                    id: 8,
                    imgSrc: "/images/project/project-8.jpg",
                    alt: 'Project Image',
                    name: 'Nordic Interior Studio',
                    category: 'Branding'
                },
                {
                    id: 9,
                    imgSrc: "/images/project/project-9.jpg",
                    alt: 'Project Image',
                    name: 'Allen Carter Business Card',
                    category: 'Web Design'
                }
            ],
            selectedCat: 'all',
            categories: []
        }
    },
    methods: {
        filter(selection) {
            this.selectedCat = selection;
        },
        shuffle: function () {
            this.previews = _.shuffle(this.previews).groupBy('category')
        },
        filterCategories: function(){
            this.categories = [...new Set(this.previews.map(item => item.category))];
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
        .preview {
            opacity: 0;
            animation: appear .5s ease-in-out forwards;
        };
        @keyframes appear {
            to {width: 100%; opacity: 1;}
        }

</style>
