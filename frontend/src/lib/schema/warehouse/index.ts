import {z} from "zod";


export const WarehouseSchema = z.object({
  name: z.string(),
  location:z.string(),

  freight_company_id: z.string(),  
})


export type WarehouseSchemaType = z.infer<typeof WarehouseSchema>