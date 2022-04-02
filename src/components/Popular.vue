<template>
      <a href="">
        <div class="border-1 border-gradient border-gradient-green font-barlow py-[30px] px-9 space-y-6">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div>
                        <img :src="avatar" alt="" class="w-11 h-11 rounded-xl">
                    </div>
                    <div >
                        <p class="text-heading-md font-semibold text-lg">{{name}}</p>
                        <p class="text-content-sm font-semibold">{{code}}</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <img src="/images/icons/icon-heart.svg" alt="">
                    <span class="text-heading-md">{{numbersLike}}</span>
                </div>
            </div>
            <div class="aspect-128/283">
                <img :src="image" alt="" class="object-cover">
            </div>
            <div class="flex items-center gap-2">
                <div class="">
                    <img :src="image1" alt="">
                </div>
                <div class="">
                    <img :src="image2" alt="">
                </div>
                <div class="">
                    <img :src="image3" alt="">
                </div>
            </div>
            <div class="font-semibold text-heading-md text-2xl text-center">
                <span>{{title}}</span>
            </div>
        </div>
    </a>
</template>

<script setup>
    defineProps({
        avatar:{
            type:String
        },
        name:{
            type:String
        },
        code:{
            type:String
        },
        numbersLike:{
            type:String
        },
        image:{
            type:String
        },
        image1:{
            type:String
        },
        image2:{
            type:String
        },
        image3:{
            type:String
        },
        title:{
            type:String
        }
    })
</script>
