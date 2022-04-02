<template>
    <a href="">
        <div class="border-gradient border-gradient-green font-barlow py-[30px] px-4 space-y-6">
            <div class="aspect-223/213 bg-gray-200">
                <img :src="image" alt="">
            </div>
            <div class="border-1 rounded-xl py-3 px-5 text-center">
                <span class="text-content-red font-medium">{{point}}</span>
            </div>
            <div class="font-semibold text-heading-md text-lg">
                <span>{{title}}</span>
            </div>
            <div class="text-price-gray font-medium">
                <span>{{price}}</span>
            </div>
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
                <div class="flex items-center gap-2">
                    <div>
                        <img src="/images/icons/icon-heart.svg" alt="">
                    </div>
                    <div class="text-heading-md">
                        <span>{{numbersLike}}</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
<script setup>
    defineProps({
        image:{
            type:String
        },
        point:{
            type:String
        },
        title:{
            type:String
        },
        price:{
            type:String
        },
        numbersLike:{
            type:String
        }

   })
</script>



