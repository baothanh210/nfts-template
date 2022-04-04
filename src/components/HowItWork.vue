<template>
    <a v-for="(item,index) in howItWorks" :key="index" href="">
        <div class="border-gradient border-gradient-green rounded-md">
            <div class=" py-16 px-12 h-full">
                <div class="flex items-center gap-5">
                    <div>
                        <img :src="item.image" alt="">
                    </div>
                    <div class="text-heading-md font-bold text-2xl">
                        <span>{{item.title}}</span>
                    </div>
                </div>
                <div class="pt-4">
                    <span>{{item.content}}</span>
                </div>
                
            </div>
        </div>
    </a>
</template>

<script setup>
    import { reactive } from 'vue';
    const howItWorks = reactive([
        {
            image:"images/image/how-it-works/icon-wallet.svg",
            title:"Set Up Wallet",
            content:"Set up your wallet and then you can create, sell & collect  NFTs at Ethoz and add nfts   >>"
        },
        {
            image:"images/image/how-it-works/icon-add.svg",
            title:"Set Up Wallet",
            content:"Set up your wallet and then you can create, sell & collect  NFTs at Ethoz and add nfts   >>"
        },
        {
            image:"images/image/how-it-works/icon-money.svg",
            title:"Set Up Wallet",
            content:"Set up your wallet and then you can create, sell & collect  NFTs at Ethoz and add nfts   >>"
        }
    ])
</script>
