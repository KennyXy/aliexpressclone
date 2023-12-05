 export default defineNuxtRouteMiddleware((to, from) => {


     const user = useSupabaseUser()

     if (!user.value && to.fullPath == '/checkout') {
         return navigateTo('/auth')
     }
 })