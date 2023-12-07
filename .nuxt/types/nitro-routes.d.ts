// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/prisma/add-address': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/add-address').default>>>>
    }
    '/api/prisma/create-order': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/create-order').default>>>>
    }
    '/api/prisma/get-address-by-user/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/get-address-by-user/[id]').default>>>>
    }
    '/api/prisma/get-all-orders-by-user/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/get-all-orders-by-user/[id]').default>>>>
    }
    '/api/prisma/get-all-products': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/get-all-products').default>>>>
    }
    '/api/prisma/get-product-by-id/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/get-product-by-id/[id]').default>>>>
    }
    '/api/prisma/search-by-name/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/search-by-name/[id]').default>>>>
    }
    '/api/prisma/update-address/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/prisma/update-address/[id]').default>>>>
    }
    '/api/stripe/paymentintent': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/stripe/paymentintent').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}