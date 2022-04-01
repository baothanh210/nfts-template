<template >
    <!-- Header -->
    <div class="relative overflow-hidden">
        <section class="pt-7 lg:pt-19 pb-10 md:pb-25" >
            <div class="container">
                <header class=" flex flex-wrap items-center gap-5 text-heading-md  justify-between font-barlow">
                    <!-- Logo -->
                    <a href="" class="flex items-center font-barlow gap-3">
                        <div class="">
                            <img src="/images/logos/logo-nft.svg" alt="" class="">
                        </div>
                        <span class="text-[26px] font-semibold">Nfts</span>
                    </a>
                    <!-- Nav -->
                    <nav class="order-3 md:order-2 font-sansPro text-[17px]">
                        <ul class="flex items-center gap-12">
                            <li><a href="">Explore</a></li>
                            <li><a href="">Featured Art</a></li>
                            <li><a href="">Activity</a></li>
                        </ul>
                    </nav>
                    <!-- sec3 -->
                    <div class="order-2 md:order-3 flex items-center gap-4 md:gap-9 ">
                        <div class=" bg-[#404040] rounded-md">
                            <a href="" class="flex items-center text-white flex items-center gap-2 py-2 px-4 md:py-4 md:px-9 ">
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
                </header>
            </div>
            
        </section>
        <!-- Banner -->
        <section class="pb-20">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center ">
                    <div class="w-full lg:w-1/2 space-y-8">
                        <div class=" bg-[#CDEE69] bg-opacity-10 inline-block py-1 px-5">
                            <span class="font-sansPro text-heading-md">LIMITED TIME</span>
                        </div>
                        <div class="relative">
                            <div class="font-barlow text-3xl md:text-6xl text-heading-md font-bold lg:max-w-122 ">
                                <span class="leading-heading">Discover,Collect and Sell </span>
                            </div>
                            <div class="lg:absolute bottom-0 right-12 font-barlow text-6xl ">
                                <span class="text-tothe text-5xl md:text-6xl font-extrabold leading-heading">NFT ASSETS</span>
                            </div>
                        </div>
                        <div class="font-sansPro text-lg text-content-sm ">
                            <span>Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens. Buy, Sell, And Discover Exclusive Digital AssetsUnit of data stored on a digital ledger, called a blockchain.</span>
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
                    <span class="text-[44px] font-bold text-heading-md">Collection of The Week</span>
                    
                    <a href="" class="flex items-center gap-3 text-[29px] text-viewMore-md font-semibold">
                        View all Creator
                        <div class="w-6 pt-1">
                            <img src="/images/icons/icon-arrow.svg" alt="" class="w-full h-full object-cover">
                        </div>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                    <collection-item></collection-item>
                </div>
            </div>
        </section>
        <!-- Live Auction -->
        <section class="pb-30">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-17">
                    <span class="text-[44px] font-bold text-heading-md">Live Aution</span>
                    
                    <a href="" class="flex items-center gap-3 text-[29px] text-viewMore-md font-semibold">
                        View all
                        <div class="w-6 pt-1">
                            <img src="/images/icons/icon-arrow.svg" alt="" class="w-full h-full object-cover">
                        </div>
                    </a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <live-auction-item></live-auction-item>
                    <live-auction-item></live-auction-item>
                    <live-auction-item></live-auction-item>
                    <live-auction-item></live-auction-item>

                </div>

            </div>
        </section>

        <!-- Explore More -->
        <section class="pb-30">
            <div class="container">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-10 pb-17 font-barlow text-heading-md">
                    <span class="text-4xl sm:text-[44px] font-bold text-heading-md">Explore More</span>
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
            </div>
        </section>
    </div>
   
</template>

<script setup>
// Import Swiper Vue.js components

import bannerImg from '../components/Banner.vue'
import collectionItem from '../components/Collection.vue'
import liveAuctionItem from '../components/LiveAuction.vue'

import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
const modules = [EffectCards]
  
</script>
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.bg-linear{
    background: linear-gradient(91.66deg, #88FFFB 7.72%, #7DFE95 99.26%);
}
.text-tothe {
    background: linear-gradient(90deg, #57FAF4 0%, #46FEF7 0.01%, #18FF43 113.59%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.5px;
    background-clip: text;
    text-fill-color: transparent;

}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {

}
.leading-heading{
    line-height: 85px !important;
}

</style>
