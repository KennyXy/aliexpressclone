import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async(event) => {
    const body = await readBody(event)

    const res = await prisma.addresses.update({
        where: { id: Number(event.context.params.id) },
        data: {
            name: body.name,
            address: body.addres,
            city: body.city,
            zipcode: body.zipCode,
            country: body.country,

        }
    })
})