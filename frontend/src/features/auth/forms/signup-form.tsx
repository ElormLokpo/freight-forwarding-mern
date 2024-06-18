import React from 'react'
import {motion} from "framer-motion";
import { slideInTop } from '@/assets/animations/variants';
import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { AuthSignUpSchema, AuthSignUpType } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';

const SignUpForm = () => {

     const signUpSchemaValidator = useForm<AuthSignUpType>({
      
     });
//   const registerFormSchemaValidator = useForm<AuthRegisterType>({
//     resolver: zodResolver(AuthRegisterSchema),
//     defaultValues:{
//       firstname:"",
//       othernames:"",
//       lastname:"",
//       email:"",
//       address:{
//         city:"",
//         country:""
//       },
//       password:""
      
//     }
//   })

  const onSumbit = (data: AuthSignUpType)=>{
    console.log(data)
  }

  return (
    <motion.div 
        variants={slideInTop}
        initial="initial"
        animate="animate"
        transition={{duration:0.5, delay:0.5}}
        exit="exit"

        className='bg-white rounded p-2'
    >
        <Form {...signUpSchemaValidator}>
      <form onSubmit={signUpSchemaValidator.handleSubmit(onSumbit)}>
        <div className="flex gap-2 mb-3">
          <FormField
            name="firstname"
            control = {signUpSchemaValidator.control}
            render = {({field})=>(
              <FormItem>
                  <FormLabel>Firstname:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Firstname" {...field}/>
                  </FormControl>
              </FormItem>
            )}
          />
         

          <FormField 
            name="lastname"
            control={signUpSchemaValidator.control}
            render = {({field})=>(
                <FormItem>
                    <FormLabel>Lastname:</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder= "Lastname" {...field} />
                    </FormControl>
                </FormItem>
            )}
          />
        </div>

        <div>
            <FormField 
            
                name="othernames"
                control ={signUpSchemaValidator.control}
                render = {({field})=>(
                    <FormItem>
                        <FormLabel>Othernames:</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Othernames" {...field}/>
                        </FormControl>
                    </FormItem>
                )}
            />
          </div>
      </form>

    </Form>

        
    </motion.div>
  )
}

export default SignUpForm