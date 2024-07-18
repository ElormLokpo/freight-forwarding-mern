import {z} from "zod";

export const FreightCompanySchema = z.object({
    company_name: z.string(),
    address: z.object({
        country: z.string({required_error:"Country required",invalid_type_error:"Field can only contain letters"}).trim(),
        city: z.string({required_error:"City required",invalid_type_error:"Field can only contain letters"}).trim()
    }),
    email: z.string({required_error:"Email required"}).email({message:"Invalid email"}).trim(),
    phone: z.string(),
    urls: z.string(),
    owner: z.string()
})


export type FreightCompanySchemaType = z.infer<typeof FreightCompanySchema>