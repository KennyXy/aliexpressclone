<template>
    <MainLayout class="max-h-screen overflow-x-scroll">
        <div id="ShoppingCartPage" class=" max-w-[1200px] mx-auto px-2 md:-mt-32">
            <div v-if="!userStore.cart.length" class="h-[500px] flex items-center justify-center">
                <div class="pt-20">
                    <img class="mx-auto" width="250" src="/cart-empty.png" alt="empty cart" />

                    <div class="text-xl text-center mt-4">No Items yet ?</div>

                    <div v-if="!user" class="flex text-center">
                        <nuxt-link to="/auth" class="bg-[#fd374f] w-full text-white font-semibold p-1.5 rounded-full mt-4">
                            Sign in
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <div v-else class="md:flex gap-4 justify-between mx-auto w-full   md:mt-8">
                <div class="md:w-[65%]">
                    <div class="bg-white rounded-lg p-6">
                        <div class="text-2xl font-bold mb-2">
                            Shopping cart {{userStore.cart.length}}
                        </div>
                    </div>
                    <div class="bg-[#feeeef] rounded-lg p-4 mt-4">
                        <div class="text-red-500 font-bold">
                            Welcome Deal applicable on 1 item only
                        </div>

                        <div id="item" class="bg-white rounded-lg p-4 mt-4">
                            <div v-for="product in userStore.cart">
                                <CartItem :product="product" :selectedArray="selectedArray"
                                    @selectedRadio="selectedRadioFunc" />
                            </div>
                        </div>

                    </div>
                </div>


                <div class="md:w-[35%]">
                    <div id="Summary" class="bg-white rounded-lg p-4">
                        <div class="text-2xl font-extrabold mb-2">
                            Summary
                        </div>

                        <div class="flex items-center justify-between my-4">
                            <div class="font-semibold">Total</div>
                            <div class="text-2xl font-semibold">
                                £ <span class="font-extrabold"> {{ totalPriceComputed }} </span>
                            </div>
                        </div>

                        <button
                        @click="goToCheckout"
                        class="
                        flex 
                        items-center
                        justify-center
                        bg-[#fd374f]
                        w-full
                        text-white
                        text-[21px]
                        font-semibold
                        p-1.5
                        rounded-full
                        mt-4"
                        >
                        Checkout

                        </button>


                    </div>

                    <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
                        <div class="text-lg font-semibold mb-2">
                            Payment Methods
                        </div>

                        <div class="flex items-center justify-start gap-8 my-4">
                              <div v-for="card in cards ">
                                <img class="h-6" :src="card" alt="">

                              </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";

const userStore = useUserStore()
 const user = useSupabaseUser()

let selectedArray = ref([])
onMounted(() =>{
    setTimeout(() => 
        userStore.isLoading = false , 200
    )
})

const cards = ref([
    'visa.png',
    'mastercard.png',
    'paypal.png',
    'applepay.png'
])

const totalPriceComputed = computed(() =>{
    let price = 0
    userStore.cart.forEach( prod =>{
        price+= prod.price
    })

    return price / 100
})


const selectedRadioFunc = (e) =>{
    if(!selectedArray.value.length){
        selectedArray.value.push(e)
        return
    }
    selectedArray.value.forEach((item , index) => {
        if(e.id != item.id){
            selectedArray.value.push(e)
        }else{
            selectedArray.value.splice(index , 1)
        }
    })
}

const goToCheckout = () =>{
    let ids = []
    userStore.checkout = []

    selectedArray.value.forEach( item => ids.push(item.id))

    let res = userStore.cart.filter( (item) => {
        return ids.indexOf(item.id) != -1
    })

    res.forEach(item => userStore.checkout.push(toRaw(item)))

    return navigateTo('/checkout')
}



const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 10995,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 223,
        description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men's clothing",
        image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 5599,
        description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 },
    }
];


</script>

<style lang="scss" scoped></style>
