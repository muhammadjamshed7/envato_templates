<template>
    <!-- Achieved End -->
    <div class="section section-padding mt-n1 mb-n2">
        <div class="container">

            <!-- Section Title Start -->
            <div class="section-title-2">
                <h2 class="title">award achieved</h2>
            </div>
            <!-- Section Title End -->

            <!-- Achieved Year Start -->
            <div v-for="(awardBlog, index) in awardBlogs" :key="index" :class="awardBlog.classname">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="year-text">
                            <p>{{awardBlog.year}}</p>
                        </div>
                    </div>
                    <div class="col-lg-9">

                        <div v-for="(blogcontent, index) in awardBlog.blogcontents" :key="index" :class="blogcontent.classname">
                            <span :class="blogcontent.subclassname">{{blogcontent.subtitle}}</span>
                            <h2 class="title">
                                <router-link to="/blog">{{blogcontent.titlewhite}} <span>{{blogcontent.titlegray}}</span></router-link>
                            </h2>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Achieved Year End -->

        </div>
    </div>
    <!-- Achieved End -->
</template>

<script>
export default {
    data () {
        return {
            awardBlogs: [
                {
                    year: "2021",
                    classname: "achieved-year",
                    blogcontents: [
                        {
                            classname:"achieved-item",
                            subclassname: "sub-title text-primary",
                            subtitle: "Awards",
                            titlewhite: "Site Of The Years for",
                            titlegray: "Norda Landing Site"
                        },
                        {
                            classname:"achieved-item",
                            subclassname: "sub-title text-danger",
                            subtitle: "CSS Design Award",
                            titlewhite: "Honorable Mention for",
                            titlegray: "Barbero Stream Music App"
                        },
                        {
                            classname:"achieved-item",
                            subclassname: "sub-title text-success",
                            subtitle: "Product Hunt Maker",
                            titlewhite: "Gold In Digital Craft for",
                            titlegray: "Uthr"
                        }
                    ]
                },
                {
                    year: "2020",
                    classname: "achieved-year",
                    blogcontents: [
                        {
                            classname:"achieved-item",
                            subclassname: "sub-title text-white",
                            subtitle: "Fwa",
                            titlewhite: "Coporate Social Responsiblity for",
                            titlegray: "Unore"
                        },
                        {
                            classname:"achieved-item",
                            subclassname: "sub-title text-warning",
                            subtitle: "Semplice",
                            titlewhite: "Best Showcase for",
                            titlegray: "Nordic"
                        }
                    ]
                }
            ]
        }
    }
}
</script>
