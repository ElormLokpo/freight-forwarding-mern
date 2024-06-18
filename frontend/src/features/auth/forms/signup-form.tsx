import React from 'react'
import { motion } from "framer-motion";
import { slideInTop } from '@/assets/animations/variants';
import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { AuthSignUpSchema, AuthSignUpType } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import PButton from '@/components/button';

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

  const onSumbit = (data: AuthSignUpType) => {
    console.log(data)
  }

  return (
    <motion.div
      variants={slideInTop}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, delay: 0.5 }}


      className='bg-white rounded p-5 w-3/12'
    >
      <Form {...signUpSchemaValidator}>
        <form onSubmit={signUpSchemaValidator.handleSubmit(onSumbit)}>
          <div className='grid grid-cols-2 gap-2 mb-2'>
            <FormField

              name="firstname"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Firstname:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Firstname" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField

              name="lastname"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lastname:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Lastname" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />


          </div>

          <div className='mb-2'>
            <FormField

              name="othernames"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Othernames:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Othernames" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-2 gap-2 mb-4'>
            <FormField

              name="address.country"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Country" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField

              name="address.city"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="City" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />


          </div>

          <div className='mb-2'>
            <FormField
              name="email"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input placeholder="example.someone@gmail.com" type="email" {...field} />
                  </FormControl>
                </FormItem>

              )}
            />
          </div>

          <div className='mb-2'>
            <FormField
              name="password"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                </FormItem>

              )}
            />
          </div>
          <div className='mb-5'>
            <FormField
              name="confirmPassword"
              control={signUpSchemaValidator.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirm Password" type="password" {...field} />
                  </FormControl>
                </FormItem>

              )}
            />
          </div>

          <div className='mb-3'>
            <PButton><p>Create Account</p></PButton>
          </div>
          <div className='text-sm flex items-center justify-center'>
              <p className="text-gray-500">Already have an account? Click <span className='text-black underline font-semibold'>here</span> to login.</p>
          </div>
        </form>

      </Form>


    </motion.div>
  )
}

export default SignUpForm