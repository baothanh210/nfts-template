<template>
   
              
    <a href="" class="">
        <div class="border-gradient border-gradient-purple pt-5 pb-6 px-5 font-barlow">
            <div class="flex items-center gap-5">
                <div class="relative flex-none aspect-square bg-gray-200">
                    <img :src="image" alt="" class="w-20 h-20 object-cover rounded-xl">
                    <div v-if="tick" class="absolute bottom-5 -right-[10px] w-[22px] h-[22px] rounded-1/2 bg-tick flex items-center justify-center">
                        <img src="/images/image/collection-week/tick.svg" alt="">
                    </div>
                </div>
                <div class="flex flex-col gap-2">
                    <span class="text-heading-md font-semibold">{{name}}</span>
                    <span class="text-content-red text-sm font-semibold">{{price}}</span>
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
        name:{
            type:String
        },
        price:{
            type:String
        },
        tick:{
            type:Boolean
        }


    })
</script>
