import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { AuthSignInSchema, AuthSignInType } from '@/lib';
import {motion as m} from "framer-motion";
import {zodResolver} from "@hookform/resolvers/zod"
import { Input } from '@/components/ui/input';
import PButton from '@/components/button';
import { useLoginMutation } from '@/services/api/auth';
import { slideInTop } from '@/animations';

const SignInForm = () => {
  const [login, {isLoading}] = useLoginMutation();

  const signInSchemaValidator = useForm<AuthSignInType>({
      resolver: zodResolver(AuthSignInSchema),
      defaultValues:{
        email:"",
        password:""
      }
  });
  
  

  const onSumbit = async (data: AuthSignInType) => {
    let res = await login(data);
    
    
  }

  return (
    <m.div
      variants={slideInTop}
      initial = "initial"
      animate = "animate"
      exit = "exit"
      transition ={{duration:0.7, delay:0.8}}

      className='bg-white rounded p-5 sm:w-4/12 md:w-3/12 lg:w-3/12'
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


    </m.div>
  )
}

export default SignInForm