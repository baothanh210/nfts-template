<template> 
    
    <a v-for="(collect,index) in collectionImg " :key="index" href="" class="">
        <div class="border-gradient border-gradient-purple pt-5 pb-6 px-5 font-barlow">
            <div  class="flex items-center gap-5">
                <div class="relative flex-none aspect-square bg-gray-200">
                    <img :src="collect.image" alt="" class="w-20 h-20 object-cover rounded-xl">
                    <div v-if=collect.tick class="absolute bottom-5 -right-[10px] w-[22px] h-[22px] rounded-1/2 bg-tick flex items-center justify-center">
                        <img src="/images/image/collection-week/tick.svg" alt="">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-heading-md font-semibold">{{collect.name}}</span>
                    <span class="text-content-red text-sm font-semibold">{{collect.price}}</span>
                </div>
            </div>
        </div>
    </a>
   
</template>
<script setup>
    import {ref,reactive} from 'vue'
    const collectionImg = [
        {
            image:'/images/image/collection-week/collect1.png',
            name:"Boss Beauties",
            price:"52.21 ETH",
            tick:"checked"
        },
        {
            image:"/images/image/collection-week/collect2.png",
            name:"MutantCats",
            price:"25.23 ETH"
        },
        {
            image:"/images/image/collection-week/collect3.png",
            name:"Worlds Women",
            price:"32.22 ETH",
            tick:"checked"
        },
        {
            image:"/images/image/collection-week/collect4.png",
            name:"Worlds Women",
            price:"32.22 ETH",
            tick:"checked"
        },
        {
            image:"/images/image/collection-week/collect5.png",
            name:"Worlds Women",
            price:"32.22 ETH",
            tick:"checked"
        },
        {
            image:"/images/image/collection-week/collect6.png",
            name:"Worlds Women",
            price:"32.22 ETH",
            tick:"checked"
        },
        {
            image:"/images/image/collection-week/collect7.png",
            name:"Worlds Women",
            price:"32.22 ETH",
            tick:"checked"
        },
        {
            image:"/images/image/collection-week/collect8.png",
            name:"Worlds Women",
            price:"32.22 ETH",
            tick:"checked"
        }
    ]
</script>
