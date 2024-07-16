import {z} from "zod";

export const SignInSchema = z.object({
    email: z.string({required_error:"Email required"}).email({message:"Invalid email"}).trim(),
    password: z.string({required_error:"Password required"})
})

export const SignUpSchema = z.object({
    firstname: z.string({required_error:"Firstname required",invalid_type_error:"Field can only contain letters"}).trim(),
    lastname: z.string({required_error:"Lastname required",invalid_type_error:"Field can only contain letters"}).trim(),
    othernames: z.optional(z.string().trim()),
    address: z.object({
        country: z.string({required_error:"Country required",invalid_type_error:"Field can only contain letters"}).trim(),
        city: z.string({required_error:"City required",invalid_type_error:"Field can only contain letters"}).trim()
    }),
    email: z.string({required_error:"Email required"}).email({message:"Invalid email"}).trim(),
    passwordHash: z.string({required_error:"Password required"}).min(6,{message:"Password should be at least 6 characters"}).trim(),
    role: z.object({
        role: z.optional(z.string().trim()),
        section: z.optional(z.string().trim())
    })
})

export type SignInSchemaType = z.infer<typeof SignInSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
