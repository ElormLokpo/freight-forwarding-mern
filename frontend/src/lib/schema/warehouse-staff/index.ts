import {z} from "zod";


export const WarehouseStaffSchema = z.object({
  fullname: z.string(),
  phone:z.string(),
  role:z.string(),
  warehouse_id:z.string(),

  freight_company_id: z.string(),  
})


export type WarehouseStaffSchemaType = z.infer<typeof WarehouseStaffSchema>