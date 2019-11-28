<template>
    <div>
    <div class="container">
        <!--slide-->
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col lg:w-2/3 w-full mb-3 hidden md:block">
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/slideshow/slide-1.gif"
                                 alt="banner">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/slideshow/slide-2.gif"
                                 alt="banner">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/slideshow/slide-3.gif"
                                 alt="banner">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/slideshow/slide-4.gif"
                                 alt="banner">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="vx-col lg:w-1/3 w-full mb-3">
                    <!-- OVERLAY CARD -->
                    <vx-card class="overlay-card overflow-hidden w-full">
                        <template slot="no-body">
                            <a href="http://tactic.muni.cz/">
                            <img src="http://tactic.muni.cz/thumbs/1180tactic-logo.png" alt="tactic"
                                 class="responsive">
                            <div class="card-overlay text-white flex flex-col justify-between">
                                <h4 class="text-white mb-4">TACTIC</h4>
                                <p>Through Academic Cooperation Towards Innovative Capacity</p>
                            </div>
                            </a>
                        </template>
                    </vx-card>
                    <vx-card class="overlay-card overflow-hidden w-full mt-2">
                        <template slot="no-body">
                            <a href="http://www.unicamedu.com/index.php?lang=en">
                            <img src="http://www.ajaes.org/img/logo.png" alt="unicam"
                                 class="responsive">
                            <div class="card-overlay text-white flex flex-col justify-between">
                                <h4 class="text-white mb-4">UNICAM</h4>
                                <p>Implementing quality of education & training of the Young
                                    Universities in rural area of CAMbodia - Unicam</p>
                            </div>
                            </a>
                        </template>
                    </vx-card>
                </div>
            </div>
            <!--welcome message and feature video-->
            <div class="vx-row">
                <div class="vx-col lg:w-1/3 w-full hidden md:block">
                    <iframe class="responsive" src="https://www.youtube.com/embed/CVe3ABsiOU8" frameborder="0"
                            allowfullscreen></iframe>
                </div>
                <div class="vx-col lg:w-2/3 w-full">
                    <div class="vx-row">
                        <div class="vx-col lg:w-3/4 w-full">
                            <a href="#" class="text-2xl">Welcome Message</a>
                            <p>
                                23 Feb 2017 - Tiramisu soufflé gummies ice cream liquorice gingerbread sweet roll. Cake
                                cotton candy candy ice cream muffin donut soufflé danish. Dessert jelly beans wafer
                                cheesecake. Sugar plum gingerbread caramels candy canes gummi bears...
                            </p>
                        </div>
                        <div class="vx-col lg:w-1/4 w-full">
                            <img class="responsive"
                                 src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/search-result.94483d7a.jpg"
                                 alt="">
                        </div>
                    </div>
                </div>
            </div>
        </vx-card>
        <!--Latest News-->
        <vx-card title="Latest News" no-shadow class="mt-3">
            <swiper :options="swiperOptionNews">
                <swiper-slide v-for="(item,index) in all_news" :key="index">
                    <a href="#">
                    <img :src="'http://localhost:3002'+item.thumb" alt="news" class="responsive mb-3">
                        <a href="#" class="mb-3 text-xl">
                            {{item.title}}
                        </a>
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
        <!--Latest Video-->
        <vx-card title="Latest Video" no-shadow class="mt-3">
            <swiper :options="swiperOptionVideo">
                <swiper-slide v-for="(item,index) in all_videos" :key="index">
                    <iframe class="responsive" :src="'https://www.youtube.com/embed/'+item.url" frameborder="0"></iframe>
                    <a href="#" class="mb-3 text-xl">
                        {{item.title}}
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
        <!--Latest Gallery-->
        <vx-card title="Latest Gallery" no-shadow class="my-3">
            <swiper :options="swiperOptionGallery">
                <swiper-slide v-for="(item,index) in all_galleries" :key="index">
                    <img class="responsive" :src="'http://localhost:3002'+item.thumb" alt="gallery">
                    <a href="#" class="mb-3 text-xl">
                        {{item.title}}
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
        <!--Corporation-->
        <h3>Corporations</h3>
        <swiper class="mt-3" :options="swiperOptionCorporation">
            <swiper-slide v-for="(corporation ,index) in all_corporation.gallery_album" :key="index">
                <img class="responsive" :src="'http://localhost:3002'+corporation.path" alt="corporation">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.min.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                },
                swiperOptionGallery: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                },
                swiperOptionNews: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                },
                swiperOptionVideo: {
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    spaceBetween: 30,
                    breakpoints: {
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        }
                    }
                },

                swiperOptionCorporation: {
                    slidesPerView: 8,
                    slidesPerColumn: 1,
                    spaceBetween: 30,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    },
                    breakpoints: {
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 40
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 20
                        }
                    }
                },

            }
        },
        computed:{
            all_corporation(){
                return this.$store.getters.all_corporation
            },
            all_news(){
                return this.$store.getters.all_news
            },
            all_videos(){
                return this.$store.getters.all_videos
            },
            all_galleries(){
                return this.$store.getters.all_galleries
            }
        },
        async created(){
            await this.fetchCorporation();
            await this.fetchNews();
            await this.fetchVideos();
            await this.fetchGalleries();
            await this.fetchAbout();
        },
        methods:{
            async fetchAbout(){
                await this.$store.dispatch('fetchAbout')
            },
            async fetchGalleries(){
                await this.$store.dispatch('fetchGalleries')
            },
            async fetchCorporation(){
                await this.$store.dispatch('fetchCorporation')
            },
            async fetchNews(){
                await this.$store.dispatch('fetchNews')
            },
            async fetchVideos(){
                await this.$store.dispatch('fetchVideos')
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>