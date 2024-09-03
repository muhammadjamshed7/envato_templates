<template>

    <!-- Page Banner Start -->
    <div class="section">

        <div class="container">

            <!-- Page Banner Title Start -->
            <div class="page-banner-title">
                <h2 class="title">{{ blog.title }}</h2>
                <ul class="meta">
                    <li><span>{{blog.category}}</span></li>
                    <li><span>{{blog.date}}</span></li>
                    <li><span>{{blog.admin}}</span></li>
                </ul>
            </div>
            <!-- Page Banner Title End -->

        </div>

        <div class="blog-details section-padding-02 mt-n2">
            <img src="/images/blog/blog-details.jpg" alt="">
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10">

                    <!-- Blog Details Content Start -->
                    <div class="blog-details-content">
                        <h2 class="blog-title">Pinterest, cornhole meditation Blue Bottle art party <br> meggings cardigan yr sustainable. Letterpress McSwepen, <br> poieney’s fap</h2>

                        <p>Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion. <br> <br> Coventry is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire.</p>

                        <blockquote class="blockquote-2">
                            <p>“The forms that designers <br> produce are flexible, so long as the <br> results serve the need.”</p>
                            <div class="author-name">Alex Ferguson</div>
                        </blockquote>

                        <p>Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they sold out blog photo booth Marfa semiotics Truffaut. Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally. Lomo 8-bit pour-over mumblecore photo booth. Kitsch pork belly cred, small batch butcher selvage direct trade. Master cleanse Bushwick cornhole narwhal plaid. Seitan vegan Portland, master cleanse gluten-free fanny pack raw denim hoodie YOLO loko.</p>

                        <!-- Post Tags Share Start -->
                        <div class="post-tags-share text-center">
                            <div class="post-tags">
                                <h6 class="label">Tags :</h6>
                                <ul class="tags">
                                    <li><a href="#">Inspiration,</a></li>
                                    <li><a href="#">Workspace,</a></li>
                                    <li><a href="#">Minimal,</a></li>
                                    <li><a href="#">Decoation</a></li>
                                </ul>
                            </div>
                            <div class="post-share">
                                <h6 class="label">Share :</h6>
                                <ul class="social">
                                    <li><a href="#"><i class="icofont-facebook"></i></a></li>
                                    <li><a href="#"><i class="icofont-twitter"></i></a></li>
                                    <li><a href="#"><i class="icofont-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Post Tags Share End -->

                        <!-- Comment Form End -->
                        <div class="comment-form comments" aria-labelledby="comment">
                            <h3 class="blog-label">Leave A Comment</h3>

                            <div class="comment-form-wrapper">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <Disqus shortname='Admin' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <!-- Comment Form End -->

                    </div>
                    <!-- Blog Details Content End -->

                </div>
            </div>
        </div>

    </div>
    <!-- Page Banner End -->

</template>

<script>
import blogs from '../data/blog.json'
import { Disqus } from 'vue-disqus'
export default {
    name: 'PostPage',
    components: {
        Disqus
    },
    data() {
        return{
            blogs,
            id: this.$route.params.id
        }
    },
    computed: {

        blog() {
            return this.blogs.blogs.find (blog => blog.id === Number(this.id))
        }
    }
}
</script>

<style lang="scss">
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


