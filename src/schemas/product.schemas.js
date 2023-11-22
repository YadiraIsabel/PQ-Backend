import { z } from 'zod';

export const productSchema = z.object({
    name: z.string({
        required_error: 'Nombre de producto es requerido'
    }),
    price: z.number({
        required_error: 'Precio debe ser un numero'
    }).optional(),
    fecha: z.string({
        required_error: 'Fecha debe ser un numero'
    }).optional()
})
