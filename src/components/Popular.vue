<template>
   
    <a v-for="(item,index) in popularCollection" :key="index" href="">
        <div class="border-1 border-gradient border-gradient-green font-barlow py-[30px] px-9 space-y-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div>
                        <img :src="item.avatar" alt="" class="w-11 h-11 rounded-xl">
                    </div>
                    <div >
                        <p class="text-heading-md font-semibold text-lg">{{item.name}}</p>
                        <p class="text-content-sm font-semibold">{{item.code}}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <img src="/images/icons/icon-heart.svg" alt="">
                    <span class="text-heading-md">{{item.numbersLike}}</span>
                </div>
            </div>
            <div class="aspect-128/283">
                <img :src="item.image" alt="" class="object-cover">
            </div>
            <div class="flex items-center gap-2">
                <div class="">
                    <img :src="item.image1" alt="">
                </div>
                <div class="">
                    <img :src="item.image2" alt="">
                </div>
                <div class="">
                    <img :src="item.image3" alt="">
                </div>
            </div>
            <div class="font-semibold text-heading-md text-2xl text-center">
                <span>{{item.title}}</span>
            </div>
        </div>
    </a>
    
</template>

<script setup>
    import {reactive} from 'vue'
    const popularCollection = [
        {
            avatar:"/images/image/popular-collection/img-popular1.png",
            name:"Hash masks",
            code:"ETH-11627",
            numbersLike:"213",
            image:"/images/image/popular-collection/img-popular2.png",
            image1:"/images/image/popular-collection/img-popular3.png",
            image2:"/images/image/popular-collection/img-popular4.png",
            image3:"/images/image/popular-collection/img-popular5.png",
            title:"Artistic collection"
        },
        {
            avatar:"/images/image/popular-collection/img1-popular1.png",
            name:"Hash masks",
            code:"ETH-11627",
            numbersLike:"213",
            image:"/images/image/popular-collection/img1-popular2.png",
            image1:"/images/image/popular-collection/img1-popular3.png",
            image2:"/images/image/popular-collection/img1-popular4.png",
            image3:"/images/image/popular-collection/img1-popular5.png",
            title:"Artistic collection"
        },
        {
            avatar:"/images/image/popular-collection/img2-popular1.png",
            name:"Hash masks",
            code:"ETH-11627",
            numbersLike:"213",
            image:"/images/image/popular-collection/img2-popular2.png",
            image1:"/images/image/popular-collection/img2-popular3.png",
            image2:"/images/image/popular-collection/img2-popular4.png",
            image3:"/images/image/popular-collection/img2-popular5.png",
            title:"Artistic collection"
        }
    ]
</script>
