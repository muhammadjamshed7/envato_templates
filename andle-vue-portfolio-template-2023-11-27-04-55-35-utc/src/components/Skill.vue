<template>
    <!-- Skills End -->
    <div class="section">
        <div class="container">

            <!-- Skills Wrapper Start -->
            <div class="skills-wrapper section-padding wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="1.5s">
                <div class="row">
                    <div class="col-lg-3">

                        <!-- Section Title Start -->
                        <div class="section-title-2">
                            <h2 class="title wow slideInUp" data-wow-duration="1s" data-wow-delay="1s">Skills</h2>
                        </div>
                        <!-- Section Title End -->

                    </div>
                    <div class="col-lg-9">

                        <!-- Skills bar Start -->
                        <div class="skill-bar-wrapper">

                            <!-- Single Skills bar Start -->
                            <div class="single-skills-bar" v-for="(skill, index) in skills" :key="index">
                                <span class="title">{{skill.title}}</span>

                                <div class="skill-bar">
                                    <div class="bar-inner progress">
                                        <div class="bar progress-line progress-bar" role="progressbar" :style="skill.styleObject" aria-valuemin="0" aria-valuemax="100">
                                            <div class="skill-percentage">
                                                <div class="count-box"><span class="count-text" data-speed="2000" data-stop="90">{{skill.parcentage}}</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Skills bar End -->

                        </div>
                        <!-- Skills bar End -->

                    </div>
                </div>
            </div>
            <!-- Skills Wrapper End -->

        </div>
    </div>
    <!-- Skills End -->
</template>


<script>

export default {
    data (){
        return {
            skills: [
                {
                    title: "Skill Section",
                    parcentage: 90,
                    styleObject: {  
                        width: '90%',
                        transition: '.6s'
                    }  
                },
                {
                    title: "branding",
                    parcentage: 70,
                    styleObject: {  
                        width: '70%'
                    }  
                },
                {
                    title: "animation / motion",
                    parcentage: 85,
                    styleObject: {
                        width: '85%'
                    }  
                }
            ]
        }
    },
}

</script>

<style lang="scss">
.progress{
    overflow: initial;
    border-radius: 0;
    .progress-bar {
        overflow: initial;
    }
}
</style>


