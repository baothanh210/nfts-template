<template>
    <div class="flex flex-wrap font-barlow gap-10">
        <div class="flex-1 space-y-7">
            <div class="flex items-center gap-3 pt-2">
                <div>
                    <img src="/images/logos/logo-nft.svg" alt="">
                </div>
                <div class="text-[26px]">
                    <span class="text-heading-md font-semibold">Nfts.</span>
                </div>
            </div>
            <div class="font-regular text-content-sm text-lg leading-8">
                <p>Phone : (+75) 36 6552 9564</p>
                <p>Email : contact@domain.com</p>
                <p>Address : 60-40 Road, 117, Washington, United State</p>
            </div>
            <div class="flex items-center gap-4">
                <a href="" class="icon-hover w-8 h-8 rounded-1/2 flex items-center justify-center shadow-md ">
                    <svg class="icon-fb">
                        <use xlink:href="../assets/sprite-svg-icons.svg#icon-fb"></use>
                    </svg>
                </a>
                
                <a href="" class="icon-hover w-8 h-8 rounded-1/2 flex items-center justify-center shadow-md ">
                    <svg class="icon-insta">
                        <use xlink:href="../assets/sprite-svg-icons.svg#icon-insta"></use>
                    </svg>
                </a>
                <a href="" class="icon-hover w-8 h-8 rounded-1/2 flex items-center justify-center shadow-md ">
                    <svg class="icon-twitter">
                        <use xlink:href="../assets/sprite-svg-icons.svg#icon-twitter"></use>
                    </svg>
                </a>
                <a href="" class="icon-hover w-8 h-8 rounded-1/2 flex items-center justify-center shadow-md ">
                    <svg class="icon-in">
                        <use xlink:href="../assets/sprite-svg-icons.svg#icon-in"></use>
                    </svg>
                </a>
            </div>
        </div>
        <div v-for="(section,index) in listInfoFooter" :key="index" class="flex-1 space-y-7">
            <div class="text-2xl font-semibold text-heading-md">
                <span>{{section.title}}</span>
            </div>
            <div  class="font-regular text-content-sm text-lg leading-8">
                <a v-for="(link,i) in section.links" :key="i" class="block" href="">
                    {{link}}
                </a>
            </div>
        </div>
        <div class="flex-1 space-y-7">
            <div class="text-2xl font-semibold text-heading-md">
                <span>Join our Newsletter</span>
            </div>
            <div class="font-regular text-content-sm text-lg">
                <p>Subscribe our newsletter to get more update & join to digikon. </p>
            </div>
            <form action="">
                <div class="relative h-9">
                    <input type="text" placeholder="Your email" class="w-full h-full rounded-md border-1 px-4 py-4">
                    <button class="absolute top-0 right-0 bg-button-input py-3 px-4 h-full rounded-tr-md rounded-br-md ">
                        <img src="/images/icons/icon-submit.svg" alt="">
                    </button>
                </div>

            </form>
        </div>
        
    </div>
    <div class="text-center pt-42 font-sansPro ">
        <a href="" class="font-regular underline">2021 © All rights reserved by  RS Co. </a>
    </div>
</template>

<script setup>
    import {reactive} from 'vue'
    const listInfoFooter = [
       
        {
            title:'NFT Marketplace',
            links:[
                'Sell your assets',
                'FAQ',
                'Support',
                'Privacy/Policy',
                'Your purchases',
            ]
        },
        {
            title:'Community',
            links:[
                'NFT Token',
                'Discusion',
                'Voting',
                'Suggest Feature',
                'Language',
            ]
        },
      
    ]
</script>
<style>
    
</style>
