import { z } from 'zod';

export const storeSchema = z.object({
    name: z.string({
        required_error: 'Nombre de tienda es requerido'
    }),
    year: z.string({
        required_error: 'fecha debe ser una fecha'
    }).optional()
})
