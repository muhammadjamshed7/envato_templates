<template>
    <!-- Project Start -->
    <div class="section">
        <div class="container">

            <!-- Page Banner Title Start -->
            <div class="page-banner-title">
                <h2 class="title"> Latest Projects</h2>
            </div>
            <!-- Page Banner Title End -->

            <!-- Filter  Section Start -->
            <div class="filter-menu">
                <ul class="menu-list">
                    <li class="active">all</li>
                    <li>Web Design</li>
                    <li>branding</li>
                    <li>mobile app</li>
                    <li>motion</li>
                </ul>
            </div>
            <!-- Filter  Section End -->

        </div>

        <div class="custom-container container-fluid">

            <!-- Project Section Start -->
            <div class="project-section mt-n4">
                <div class="row grid">

                    <div class="col-xl-4 col-md-6 mobile-app" v-for="commentIndex in commentsToShow" :key="commentIndex">
                        <div class="single-project wow zoomIn" data-wow-delay="0.3s" data-wow-duration="0.5s" v-if="commentIndex < reviews.length" >
                            <div class="project-images">
                                <a href="project-details.html"><img src="/images/project/project-1.jpg" alt="Project"></a>
                            </div>
                            <div class="project-content">
                                <h4 class="title"><a href="project-details.html"> {{reviews[commentIndex].name}} says:</a></h4>
                                <p class="category">{{reviews[commentIndex].category}}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- Project Section End -->

            <!-- Load More End -->
            <div class="load-more text-center section-padding" v-if="commentsToShow < reviews.length || reviews.length > commentsToShow">
                <button @click="commentsToShow += 3" class="more">load more</button>
            </div>

        </div>
    </div>
    <!-- Project End -->

</template>

<script>
export default {

    data() {
        return {
            reviews: [
                {
                    name: 'Derek', 
                    category: 'WebDesign'
                }, 
                {
                    name: 'Joe', 
                    category: 'Some comment'
                },
                {
                    name: 'Mike', 
                    category: 'Some comment'
                }, 
                {
                    name: 'Ron', 
                    category: 'WebDesign'
                },
                {
                    name: 'Dii', 
                    category: 'WebDesign'
                }, 
                {
                    name: 'Lonnie', 
                    category: 'Some comment'
                },
                {
                    name: 'Paul', 
                    category: 'WebDesign'
                }, 
                {
                    name: 'Mike', 
                    category: 'Some comment'
                },
                {
                    name: 'Jody', 
                    category: 'Some comment'
                }, 
                {
                    name: 'Ryn', 
                    category: 'Some comment'
                },
                {
                    name: 'Jord', 
                    category: 'Some comment'
                }, 
                {
                    name: 'Milly', 
                    category: 'Some comment'
                }
            ],
            commentsToShow: 6,
            totalComments: 0
        };
    },
    mounted() {
    this.totalComments = this.reviews.length
        console.log(this.reviews.length)
    }
}
</script>

<style lang="scss">
    .load-more {
        .more {
            background: transparent;
            border: 0px;
        }
    }
</style>
