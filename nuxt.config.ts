export default defineNuxtConfig({
  devtools: { enabled: true },
  pages : true,
  supabase: {
    redirect : false
  },
  modules : [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],

  runtimeConfig :{
    public : {
      stripePk : process.env.STRIPE_PK_KEY
    }

  },
  app : {
    head : {
      script : [
        {src : 'https://js.stripe.com/v3/' , defer : true},
        { src: 'https://js.stripe.com/v3/elements-us' }  // Add this line

      ]
    }
  }
})
