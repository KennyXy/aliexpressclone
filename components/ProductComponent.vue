<template>
    
    <div  :id="`ProductComponent${product.id}`" class="p-3 rounded-[20px] bg-white  h-full text-center transition-transform duration-500 ease-in-out hover:shadow-[0_15px_50px_20px_rgba(0,0,0,0.3)]  hover:scale-[1.1] ">
        <NuxtLink :to="`/item/${product.id}`">
            <img :src="product.image" alt="image de produit" class="thumb" />
    
          <div id="ProductDetails" class=" truncate ">
                <span class="flex items-center justify-start gap-3 px-1 pt-1">
                    <span class="text-[#ff6674] font-semibold">${{priceComputed}}</span>
                    <span class="text-gray-500 text-light line-through">${{oldPriceComputed}}</span>
    
                </span>
    
                <span class="px-1 py-1 flex justify-start relative -top-1.5 text-[#ff6674] text-xs font-semibold">
                    Extra 5% off
                </span>
    
                <div class="flex items-center gap-1 px-1 relative -top-1">
                    <span class="bg-[#fd374f] text-white text-[9px] font-semibold px-1.5 rounded-sm" >welcome deal</span>
                    <span class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1.5 rounded-sm"> Top Selling</span>
                </div>
                <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
                    5,000+ sold <Icon name="material-symbols:star-rate" class="ml-1.5" color="#757575"></Icon> 4.7
                </p>
                <p class="px-1 pt-0.5  flex justify-start font-bold text-[#404040]">
                    {{ product.title.substring(0,60)}}
                </p>
                <p class="px-1 pb-1  flex justify-start">
                <span class=" text-[#009a66] text-xs font-semibold">Free Shipping</span>
                </p>
            </div>
        </NuxtLink>
    

        
    </div>
</template>

<script setup>
const props = defineProps(['product'])
const { product } = toRefs(props)
const priceComputed = computed( ()=> {
    return product.value.price/100
})

const oldPriceComputed = computed( () =>{
    let res = (product.value.price + (product.value.price/20 ) ) /100
    return res.toFixed(2)
})

</script>

<style scoped>
.thumb {
max-height: 140px;
max-width: 100%;
margin: 0 auto;
}
</style>