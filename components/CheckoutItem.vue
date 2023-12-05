<template>
  <div class="flex justify-start my-2">
    <img
      class="rounded-md md:w-[120px] w-[90px] p-2"
      :src="product.image"
      alt=""
    />

    <div class="overflow-hidden pl-2">
        <div class="flex items-center ">
            <span
              class=" bg-[#fd374f] text-white text-[9px] font-semibold px-1.5 rounded-sm min-w-[80px]"
            >
              Welcome Deal
            </span>
      
            <div class="truncate pl-2 font-semibold">{{ product.title }}</div>
          </div>
          <div class="text-lg font-semibold mt-2">
            $ <span class="font-bold"> {{ product.price / 100 }}</span>
          </div>
    </div>
   
   
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const { product } = toRefs(props);
</script>

<style scoped></style>
