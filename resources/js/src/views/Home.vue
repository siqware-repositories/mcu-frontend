<template>
    <div>
    <div class="container">
        <!--slide-->
        <vx-card no-shadow>
            <div class="vx-row">
                <div class="vx-col lg:w-2/3 w-full mb-3">
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/images/pages/carousel/banner-16.jpg"
                                 alt="banner">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/images/pages/carousel/banner-19.jpg"
                                 alt="banner">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/images/pages/carousel/banner-5.jpg"
                                 alt="banner">
                        </swiper-slide>
                        <swiper-slide>
                            <img class="responsive" src="../../../assets/images/pages/carousel/banner-9.jpg"
                                 alt="banner">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="vx-col lg:w-1/3 w-full mb-3">
                    <!-- OVERLAY CARD -->
                    <vx-card class="overlay-card overflow-hidden w-full">
                        <template slot="no-body">
                            <img src="../../../assets/images/pages/carousel/banner-16.jpg" alt="user-profile-cover"
                                 class="responsive">
                            <div class="card-overlay text-white flex flex-col justify-between">
                                <h4 class="text-white mb-4">Tactic</h4>
                                <p>Welcome to tactic</p>
                            </div>
                        </template>
                    </vx-card>
                    <vx-card class="overlay-card overflow-hidden w-full mt-2">
                        <template slot="no-body">
                            <img src="../../../assets/images/pages/carousel/banner-16.jpg" alt="user-profile-cover"
                                 class="responsive">
                            <div class="card-overlay text-white flex flex-col justify-between">
                                <h4 class="text-white mb-4">Tactic</h4>
                                <p>Welcome to tactic</p>
                            </div>
                        </template>
                    </vx-card>
                </div>
            </div>
            <!--welcome message and feature video-->
            <div class="vx-row">
                <div class="vx-col lg:w-1/3 w-full">
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
                <swiper-slide v-for="(item,index) in 10" :key="index">
                    <a href="#">
                    <img src="../../../assets/images/pages/carousel/banner-31.jpg" alt="graphic" class="responsive mb-3">
                        <a href="#" class="mb-3 text-xl">
                            Working fine {{index}} ...
                        </a>
                    </a>
                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
        <!--Latest Video-->
        <vx-card title="Latest Video" no-shadow class="mt-3">
            <swiper :options="swiperOptionNews">
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-31.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-32.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-33.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-34.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-35.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-23.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-37.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-38.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-39.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-40.jpg" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
        <!--Latest Gallery-->
        <vx-card title="Latest Gallery" no-shadow class="mt-3">
            <swiper :options="swiperOptionNews">
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-31.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-32.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-33.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-34.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-35.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-23.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-37.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-38.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-39.jpg" alt="banner">
                </swiper-slide>
                <swiper-slide>
                    <img class="responsive" src="../../../assets/images/pages/carousel/banner-40.jpg" alt="banner">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </vx-card>
    </div>
        <!--Corporation-->
        <h3>Corporations</h3>
        <swiper class="mt-3" :options="swiperOptionCorporation">
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-31.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-32.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-33.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-34.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-35.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-23.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-37.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-38.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-39.jpg" alt="banner">
            </swiper-slide>
            <swiper-slide>
                <img class="responsive" src="../../../assets/images/pages/carousel/banner-40.jpg" alt="banner">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
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
        components: {
            swiper,
            swiperSlide
        }
    }
</script>