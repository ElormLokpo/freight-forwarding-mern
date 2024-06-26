import React from 'react'
import { slideInTop } from '@/assets/animations/variants';
import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { AuthSignInSchema, AuthSignInType } from '@/lib';

import { Input } from '@/components/ui/input';
import PButton from '@/components/button';

const SignInForm = () => {

  const signInSchemaValidator = useForm<AuthSignInType>({
       
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

  const onSumbit = (data: AuthSignInType) => {
    console.log(data)
  }

  return (
    <div

      className='bg-white rounded p-5 auth-container-width'
    >
      <Form {...signInSchemaValidator}>
        <form onSubmit={signInSchemaValidator.handleSubmit(onSumbit)}>
          <div className='mb-4'>
            <FormField
              name="email"
              control={signInSchemaValidator.control}
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

          <div className='mb-5'>
            <FormField
              name="password"
              control={signInSchemaValidator.control}
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
          

          <div className='mb-3'>
            <PButton><p>Login</p></PButton>
          </div>
          <div className='text-sm flex items-center justify-center'>
              <p className="text-gray-500">Don't have an account? Click <span className='text-black underline font-semibold'>here</span> to create one.</p>
          </div>
        </form>

      </Form>


    </div>
  )
}

export default SignInForm