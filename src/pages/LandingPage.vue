<template >
    <!-- Header -->
    <div class="relative overflow-hidden">
        <section class=" pt-7 lg:pt-19 pb-10 md:pb-25" >
            <div class="container">
                <header class=" flex flex-col lg:flex-row items-center gap-5 text-heading-md justify-between font-barlow">
                    <div class="flex items-center justify-between w-full lg:w-auto">
                        <!-- Logo -->
                        <a href="" class=" flex items-center font-barlow gap-3 ">
                            <div class="">
                                <img src="/images/logos/logo-nft.svg" alt="" class="">
                            </div>
                            <span class="text-[26px] font-semibold">Nfts</span>
                        </a>

                        <button @click="onToggleMenu" class="lg:hidden w-7 h-7">
                            <img src="/images/icons/menu-btn.svg" alt="" class="object-cover">
                        </button>
                    </div>
                    <!-- Nav -->
                    <nav  class="font-sansPro font-semibold text-[17px]">
                        <ul :class="[active ? 'left-0 w-full top-0' : '-left-full w-0 top-0']" class=" flex flex-col lg:flex-row items-center gap-12 - lg:left-auto lg:w-auto fixed lg:relative duration-600 z-50 h-screen lg:h-auto bg-gray-200 lg:bg-transparent">
                            <button @click="onToggleMenu" class="lg:hidden w-7 h-7 ml-auto mr-3 mt-6">
                                <img src="/images/icons/icon-close-menu.svg" alt="" class="object-cover">
                            </button>
                            <li v-for="(link,index) in linksHeader" :key="index">
                                <a href="">
                                    {{link}}
                                </a>
                            </li>
                            <div class="flex-1 flex items-center gap-4 md:gap-9 lg:pl-60 ">
                                <div class=" bg-[#404040] rounded-md">
                                    <a href="" class="flex items-center text-white flex items-center gap-2 py-4 px-4 md:px-9 ">
                                        <img src="/images/icons/icon-upload.svg" alt="">
                                        <span class="font-semibold">Upload</span>
                                    </a>
                                </div>
                                <div style="box-shadow:2px 2px" class="text-heading-md border-1 border-[#404040] rounded-md font-semibold text-lg">
                                    <a href="" class="flex items-centerflex items-center gap-2 py-2 px-4 md:py-4 md:px-10 ">
                                        <span>Sign Up</span>
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </nav>
                    <!-- sec3 -->
                    
                </header>
            </div>
            
        </section>
        <!-- Banner -->
        <section class="pb-20">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center ">
                    <div class="w-full lg:w-1/2 space-y-8">
                        <div class=" bg-[#CDEE69] bg-opacity-10 inline-block py-1 px-5">
                            <span class="font-sansPro text-heading-md font-semibold">{{headingData.limited}}</span>
                        </div>
                        <div class="relative">
                            <div class="font-barlow text-4xl md:text-6xl text-heading-md font-bold lg:max-w-122 ">
                                <span class="leading-10 lg:leading-20">{{headingData.heading}} </span>
                            </div>
                            <div class="lg:absolute bottom-0 right-12 font-barlow text-6xl ">
                                <span class="text-tothe text-5xl md:text-6xl font-extrabold leading-10 lg:leading-20">{{headingData.headingHightLight}}</span>
                            </div>
                        </div>
                        <div class="font-sansPro text-lg text-content-sm ">
                            <span>{{headingData.content}}.</span>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-[30px]">
                            <div style="box-shadow:2px 2px" class="flex  bg-linear font-barlow text-heading-sm border-1 border-[#404040] rounded-md font-semibold text-lg">
                                <div class="flex">
                                    <img src="/images/icons/icon-explore.svg" alt="">
                                </div>
                                <a href="" class="flex items-center  gap-2  py-4 pl-6 pr-14">
                                    <span>Explore</span>
                                </a>
                            </div>

                            <div style=" box-shadow:2px 2px" class="font-barlow text-heading-md border-1 border-[#404040] rounded-md font-semibold text-lg">
                                <a href="" class="flex items-centerflex items-center gap-2 py-4 px-7">
                                    <span class="w-full text-center">Connect Wallet</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- Slider Img -->
                    <div class="pt-10 lg:pt-0 lg:pl-10 w-full lg:w-1/2">
                        <swiper
                                :effect="'cards'"
                                :grabCursor="true"
                                :modules="modules"
                                class="mySwiper"
                            >
                                <swiper-slide>
                                    <banner-img></banner-img>
                                </swiper-slide>
                                <swiper-slide>
                                    <banner-img></banner-img>
                                </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </section>

        <!-- Collection of the week -->
        <section class="pb-30 font-barlow">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-17">
                    <span class="text-4xl sm:text-[44px] font-bold text-heading-md">Collection of The Week</span>
                    
                    <a href="" class="flex items-center gap-3 text-xl sm:text-[29px] text-viewMore-md font-semibold">
                        View all Creator
                        <div class="w-6 pt-1">
                            <img src="/images/icons/icon-arrow.svg" alt="" class="w-full h-full object-cover">
                        </div>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                    <collection-item></collection-item>
                </div>
            </div>
        </section>
        <!-- Live Auction -->
        <section class="pb-30 font-barlow">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-17">
                    <span class="text-4xl sm:text-[44px] font-semibold text-heading-md">Live Auction</span>
                    
                    <a href="" class="flex items-center gap-3 text-xl sm:text-[29px] text-viewMore-md font-semibold">
                        View all
                        <div class="w-6 pt-1">
                            <img src="/images/icons/icon-arrow.svg" alt="" class="w-full h-full object-cover">
                        </div>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <live-auction-item></live-auction-item>
                </div>
            </div>
        </section>

        <!-- Explore More -->
        <section class="pb-30 font-barlow">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-17 font-barlow text-heading-md">
                    <span class="text-4xl sm:text-[44px] font-semibold text-heading-md">Explore More</span>
                    <div class="flex flex-wrap items-center gap-8">
                        <div class="bg-heading-md text-white rounded-md">
                            <a class="block py-3 px-4 font-semibold " href="">View all</a>
                        </div>
                        <div class="border-1 rounded-md ">
                            <a class="flex items-center gap-2 py-3 px-6" href="">
                                <div>
                                    <img src="/images/icons/icon-category.svg" alt="">
                                </div>
                                <span class="font-medium">Category</span>
                            </a>
                        </div>
                         <div class="border-1 rounded-md ">
                            <a class="flex items-center gap-2 py-3 px-6" href="">
                                <div>
                                    <img src="/images/icons/icon-collection.svg" alt="">
                                </div>
                                <span class="font-semibold">Collection</span>
                            </a>
                        </div>
                        <div class="border-1 rounded-md ">
                            <a class="flex items-center gap-2 py-3 px-6" href="">
                                <div>
                                    <img src="/images/icons/icon-price-range.svg" alt="">
                                </div>
                                <span class="font-semibold">Price range</span>
                            </a>
                        </div>
                    </div>
                    <div class="flex items-center border-1 rounded-md">
                        <div class="font-semibold flex items-center gap-2 bg-[#18FF43] bg-opacity-25">
                            <a class="flex items-center gap-2 py-3 px-6" href="">
                                <div>
                                    <img src="/images/icons/icon-filter.svg" alt="">
                                </div>
                                <span class="font-semibold">Filter</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    <explore-more-item></explore-more-item>
                </div>
            </div>
        </section>

        <!-- Popular collection -->
        <section class="pb-30 font-barlow">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-17">
                    <span class="text-4xl sm:text-[44px] font-semibold text-heading-md">Popular collection</span>
                    <a href="" class="flex items-center gap-3 text-xl sm:text-[29px] text-viewMore-md font-semibold">
                        View all 
                        <div class="w-6 pt-1">
                            <img src="/images/icons/icon-arrow.svg" alt="" class="w-full h-full object-cover">
                        </div>
                    </a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <popular-collect-item></popular-collect-item>
                </div>
            </div>
        </section>

        <!-- How it works -->
        <section class="pb-30 font-barlow">
            <div class="container">
                <div class="pb-17">
                    <span class="text-4xl sm:text-[44px] font-semibold text-heading-md">How it works</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <how-it-work-item></how-it-work-item>
                </div>
            </div>
        </section>
        <!-- Get start -->
        <section class="pb-30 font-barlow">
            <div class="container">
                <div class="bg-getStarted text-center mx-auto space-y-11 py-17 lg:mx-30">
                    <div class=" max-w-130 mx-auto">
                        <span class="font-semibold text-heading-md text-2xl sm:text-4xl leading-12">Get the only wallet  and explore the world of NFTs now</span>
                    </div>
                    <div style="box-shadow:2px 2px" class="bg-[#3FF861] inline-block rounded-md">
                        <a href="" class="block font-semibold text-heading-md py-4 px-10 text-lg">Get started</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <div class="container pb-20">
            <footer-cp></footer-cp>
        </div>
        
        <!-- bgEffect  -->
        <div class="bg-effect-yellow"></div>
        <div class="bg-effect-green"></div>
        <div class="bg-effect-gray"></div>
        <div class="bg-effect-yellow2"></div>
        <div class="bg-effect-green2"></div>
        <div class="bg-effect-yellow3"></div>
        <div class="bg-effect-green3"></div>

    </div>
   
</template>

<script setup>
import { reactive } from 'vue'
import useHandleMenu from '../composables/useHandleMenu'
// Import Swiper Vue.js components
import bannerImg from '../components/Banner.vue'
import collectionItem from '../components/Collection.vue'
import liveAuctionItem from '../components/LiveAuction.vue'
import exploreMoreItem from '../components/ExploreMore.vue'
import popularCollectItem from '../components/Popular.vue' 
import howItWorkItem from '../components/HowItWork.vue'
import footerCp from '../components/Footer.vue'
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
const modules = [EffectCards]
const headingData = {
    limited:'LIMITED TIME',
    heading:'Discover,Collect and Sell',
    headingHightLight:'NFT ASSETS',
    content:'Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. Buy, Sell, And Discover Exclusive Digital AssetsUnit of data stored on a digital ledger, called a blockchain'
}

const linksHeader = [
    'Explore',
    'Featured Art',
    'Activity'
]
const {active,onToggleMenu} = useHandleMenu()
</script>
<style lang="scss">
    @import '../assets/scss/style';
</style>
