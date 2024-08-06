import {z} from "zod";

export const WarehouseAssignSchema = z.object({
    shipment_id: z.string()  
})


export type WarehouseAssignSchemaType = z.infer<typeof WarehouseAssignSchema>;