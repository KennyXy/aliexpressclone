<template>
  <MainLayout class="max-h-screen overflow-x-scroll">
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[40%]">
          <div class="flex items-center justify-center">
            <img
              v-if="currentImage"
              class="rounded-lg object-fit"
              :src="currentImage"
            />
          </div>
          <div
            v-if="images[0] !== ''"
            class="flex items-center justify-center mt-2"
          >
            <div v-for="image in images">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                width="70"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#ff5353]' : ''"
                :src="image"
                alt="image is supposed to be here !"
              />
            </div>
          </div>
        </div>

        <div class="mt-4 md:w-[60%] bg-white p-4 pl-6 rounded lg md:mt-0 ">
          <div v-if="product && product.data">
            <p class="mb-2">{{product.data.title}}</p>
            <p class="font-light text-[12px] mb-2">{{product.data.description}}</p>
          </div>

          <div class="flex items-center pt-1.5">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#ffd000] mr-2">
              <Icon
                name="material-symbols:star-rate"
                size="12"
                class="-mt-[17px]"
              ></Icon>
            </span>
            <p class="text-[#ff5353]">Extra 5% off !</p>
          </div>

          <div class="flex items-center justify-start my-2">
            <Icon
              name="material-symbols:star-rate"
              size="12"
              color="#ff5353"
            ></Icon>
            <Icon
              name="material-symbols:star-rate"
              size="12"
              color="#ff5353"
            ></Icon>
            <Icon
              name="material-symbols:star-rate"
              size="12"
              color="#ff5353"
            ></Icon>
            <Icon
              name="material-symbols:star-rate"
              size="12"
              color="#ff5353"
            ></Icon>
            <Icon
              name="material-symbols:star-rate"
              size="12"
              color="#ff5353"
            ></Icon>
            <span class="font-light text-[13px] ml-2"
              >5 123 Review 1,000+ orders</span
            >
          </div>

          <div class="border-b">
            <div class="flex items-center justify-start gap-2 my-2">
              <div class="text-xl font-bold">$ {{ priceComputed }}</div>
              <span
                class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1.5 rounded-sm"
              >
                70% off</span
              >
            </div>

            <p class="text-[#009a66] text-xs font-semibold pt-1">
              Free 11-days delivery over $8.29
            </p>
            <p class="text-[#009a66] text-xs font-semibold pt-1">
              Free shipping
            </p>

            <div class="py-2">
                <button
                class="px-6
                py-2
                rounded-lg
                text-white
                text-lg
                font-semibold
                bg-gradient-to-r
                from-[#ff851a]
                to-[#ffac2c]"
                @click="addTocart()"
                :disabled="isInCart"
                >

                <div v-if="isInCart"> Is Added</div>
                <div v-else> Add to cart</div>

                </button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout";
import {useUserStore} from "~/stores/user"

const userStore = useUserStore()
let currentImage = ref(null);
const route = useRoute()


let product = ref(null)

onBeforeMount(async () => {
  product.value = await useFetch(`/api/prisma/get-product-by-id/${route.params.id}`)
}),


  watchEffect(() => {
    //currentImage.value = "https://picsum.photos/id/237/200/300";
    if(product.value && product.value.data){
      currentImage.value=product.value.data.image
      images.value[0]=product.value.data.image
      userStore.isLoading = false
    }
  });


const isInCart = computed ( () => {
  let res = false
  userStore.cart.forEach(prod => {
    if(route.params.id == prod.id){
      res = true
    }
  })

  return res
})

const priceComputed = computed(() => {
  if(product.value && product.value.data){
    return product.value.data.price / 100
    }
    return '0.00'
});


const images = ref([
  "",
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/id/2/200/300",
  "https://picsum.photos/id/3/200/300",
  "https://picsum.photos/id/4/200/300",
]);


const addTocart = () => {
     userStore.cart.push(product.value.data)
}
</script>

<style lang="scss" scoped></style>
