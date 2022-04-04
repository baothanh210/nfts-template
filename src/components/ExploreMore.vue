<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <a v-for="(itemExplore,index) in exploreMoreItems " :key="index" href="">
            <div class="border-gradient border-gradient-green rounded-xl font-barlow py-[30px] px-4 space-y-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <div class="w-11 h-11 rounded-1/2 bg-white flex items-center justify-center">
                            <div class="w-[30px] h-[30px] rounded-1/2 flex items-center justify-center overflow-hidden">
                                <img src="/images/image/live-auction/icon-bg1.png" alt="" class="w-full h-full object-cover">
                            </div>
                        </div>
                        <div class="-ml-4 w-11 h-11 rounded-1/2 bg-white flex items-center justify-center">
                            <div class="w-[30px] h-[30px] rounded-1/2 flex items-center justify-center overflow-hidden">
                                <img src="/images/image/live-auction/icon-bg1.png" alt="" class="w-full h-full object-cover">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aspect-233/290 ">
                    <img :src="itemExplore.image" alt="" class="rounded-md">
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <div class="font-semibold text-heading-md text-lg">
                            <span>{{itemExplore.title}}</span>
                        </div>
                        <div class="text-price-gray font-medium">
                            <span>{{itemExplore.info}}</span>
                        </div>
                    </div>
                    <div>
                        <img src="/images/icons/icon-diamond-explore.svg" alt="">
                    </div>
                </div>
                <div class="border-1 rounded-xl py-3 px-5 flex items-center justify-between">
                    <span class="text-content-sm font-medium">{{itemExplore.code}}</span>
                    <span class="text-content-sm font-medium">{{itemExplore.code1}}</span>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <a href="" class="text-content-red font-semibold">Place a Bid</a>
                    </div>
                    <div class="flex items-center gap-2">
                        <div>
                            <img src="/images/icons/icon-heart.svg" alt="">
                        </div>
                        <div class="text-heading-md">
                            <span>{{itemExplore.numbersLike}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    const exploreMoreItems = ([
        {
            image:"/images/image/explore-more/explore-more1.png",
            title:"Walking On Air # 22",
            info:"Open for bids 1/1",
            code:"110 ETH 12/14",
            code1:"Bid 80 ETH",
            numbersLike:"412"
        },
        {
            image:"/images/image/explore-more/explore-more2.png",
            title:"Walking On Air # 22",
            info:"Open for bids 1/1",
            code:"110 ETH 12/14",
            code1:"Bid 80 ETH",
            numbersLike:"412"
        },
        {
            image:"/images/image/explore-more/explore-more3.png",
            title:"Walking On Air # 22", 
            info:"Open for bids 1/1",
            code:"110 ETH 12/14",
            code1:"Bid 80 ETH",
            numbersLike:"412"
        }

    ])

</script>
