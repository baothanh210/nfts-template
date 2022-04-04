<template>

    <a v-for="(auction,index) in liveAuctions" :key="index" href="">
        <div class="border-gradient border-gradient-green font-barlow py-[30px] px-4 space-y-6">
            <div class="aspect-223/213 bg-gray-200">
                <img :src="auction.image" alt="">
            </div>
            <div class="border-1 rounded-xl py-3 px-5 text-center">
                <span class="text-content-red font-medium">{{auction.point}}</span>
            </div>
            <div class="font-semibold text-heading-md text-lg">
                <span>{{auction.title}}</span>
            </div>
            <div class="text-price-gray font-medium">
                <span>{{auction.price}}</span>
            </div>
            <div class="flex items-center justify-between">
                <div class="pl-4 flex items-center">
                    <div v-for="(avatarUser,index) in auction.avatarUsers" :key="index" class="-ml-4 w-11 h-11 rounded-1/2 bg-white flex items-center justify-center">
                        <div class="w-[30px] h-[30px] rounded-1/2 flex items-center justify-center overflow-hidden">
                            <img :src="avatarUser" alt="" class="w-full h-full object-cover">
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <div>
                        <img src="/images/icons/icon-heart.svg" alt="">
                    </div>
                    <div class="text-heading-md">
                        <span>{{auction.numbersLike}}</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
    
</template>
<script setup>
    import {reactive} from 'vue'
    const liveAuctions = reactive([
        {
            image:"/images/image/live-auction/live-auction1.png",
            point:"124 D :10 H :25 M :08 S",
            title:"Abstract cenious",
            price:"Price : 3.45 ETH 10/10",
            numbersLike:"126",
            avatarUsers:[
                '/images/image/live-auction/icon-bg1.png',
                '/images/image/live-auction/icon-bg2.png',
            ]
        },
        {
            image:"/images/image/live-auction/live-auction2.png",
            point:"124 D :10 H :25 M :08 S",
            title:"Abstract cenious",
            price:"Price : 3.45 ETH 10/10",
            numbersLike:"356",
            avatarUsers:[
                '/images/image/live-auction/icon-bg3.png',
                '/images/image/live-auction/icon-bg2.png',
                '/images/image/live-auction/icon-bg1.png',
            ]
        },
        {
            image:"/images/image/live-auction/live-auction3.png",
            point:"124 D :10 H :25 M :08 S",
            title:"Abstract cenious",
            price:"Price : 3.45 ETH 10/10",
            numbersLike:"612",
            avatarUsers:[
                '/images/image/live-auction/icon-bg4.png',
                '/images/image/live-auction/icon-bg5.png',
                '/images/image/live-auction/icon-bg1.png',
            ]
        },
        {
            image:"/images/image/live-auction/live-auction4.png",
            point:"124 D :10 H :25 M :08 S",
            title:"Abstract cenious",
            price:"Price : 3.45 ETH 10/10",
            numbersLike:"231",
            avatarUsers:[
                '/images/image/live-auction/icon-bg6.png',
                '/images/image/live-auction/icon-bg7.png', 
            ]
        },

    ])
</script>



