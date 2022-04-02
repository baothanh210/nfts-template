<template>
    <a href="">
        <div class="border-gradient border-gradient-green rounded-md">
            <div class=" py-16 px-12 h-full">
                <div class="flex items-center gap-5">
                    <div>
                        <img :src="image" alt="">
                    </div>
                    <div class="text-heading-md font-bold text-2xl">
                        <span>{{title}}</span>
                    </div>
                </div>
                <div class="pt-4">
                    <span>{{content}}</span>
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
        title:{
            type:String
        },
        content:{
            type:String
        }
    })

</script>
