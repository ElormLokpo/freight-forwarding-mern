import z from "zod";
import { useForm } from 'react-hook-form';

const { watch } = useForm();

const AddressSchema = z.object({
    country:  z.string(),
    city: z.string()
})

export const AuthSignUpSchema = z.object({
    firstname: z.string({required_error:"Firstname required"}),
    othernames: z.string({required_error:"Othernames required"}),
    lastname: z.string({required_error:"Lastname required"}),
    email: z.string({required_error:"Email required"}).email({message:"Enter valid email"}),
    address: AddressSchema,
    passwordHash:  z.string({required_error:"Password required"}).min(6, "Password should be at least 6 characters"),
    confirmPassword:  z.string()

   
    })
    

export const AuthSignInSchema = z.object({
    email: z.string().email({message:"Enter valid email"}),
    password:  z.string()
    
})

export type AuthSignUpType = z.infer<typeof AuthSignUpSchema>;
export type AuthSignInType = z.infer<typeof AuthSignInSchema>;