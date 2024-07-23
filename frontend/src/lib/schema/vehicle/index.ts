import {z} from "zod";


export const VehicleSchema = z.object({
  name: z.string(),
  number_plate:z.string(),
  max_capacity:z.object({
    units: z.string(),
    weightValue: z.string(),
    heightValue: z.string()
  }),
  driver:z.object({
    fullname: z.string(),
    license_number: z.string()
  }),

  freight_company_id: z.string(),  
})


export type VehicleSchemaType = z.infer<typeof VehicleSchema>