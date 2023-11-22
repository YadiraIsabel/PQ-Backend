import { z } from 'zod';

export const countSchema = z.object({
    name: z.string({
        required_error: 'Nombre de tienda es requerido'
    }),
    total: z.number({
        required_error: 'El monto total es requerido'
    }),
    totalin: z.number({
        required_error: 'El monto a descontar debe de ser numero'
    }).optional(),
    date: z.string({
        required_error: 'fecha debe ser una fecha'
    }).optional()
})
