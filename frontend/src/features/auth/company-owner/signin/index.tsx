import { SignInSchema, SignInSchemaType } from "@/lib/schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  Form,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MainButton } from "@/app/components/button";
import { co_auth_route as auth_route } from "@/constants/routes";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion as m } from "framer-motion";
import { slideInTop } from "@/animation";
import { useSigninMutation } from "@/services/api/auth";
import {toast} from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";



const CoSignInPage = () => {
  const [signIn, {isLoading}] = useSigninMutation();
  const navigate = useNavigate();
 

  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignInUser = async (data: SignInSchemaType)=>{
    const response = await signIn({payload:data});

   
    if (response.data == false){
      toast.error("Incorrect Password")
    }

    if(response.data==true){
      toast.success("Sign in successful")

      
       navigate({
        to:"/dashboards/co/warehouses"
      })
    }

  }

  const onSubmit = (data: SignInSchemaType) => {
    
    handleSignInUser(data)

  };

  return (
    <m.div
      variants={slideInTop}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[400px]"
    >
      <div className="font-bold mb-3">
        <span className="dark:text-indigo-500">Shipper</span> <span className="font-light"> &gt; Sign In </span>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded p-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-2">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="someone@gmail.com"
                        {...field}
                      />
                    
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-6">
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-2">
              <MainButton className="bg-black dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white hover:bg-gray-800 text-sm font-semibold py-3 px-2 rounded w-full">
                <div>
                  <p>Sign In</p>
                </div>
              </MainButton>
            </div>

            <div className="flex justify-center">
              <p className="text-xs">
                Don't have an account?{" "}
                <Link
                  to={auth_route.signup}
                  className="underline font-semibold"
                >
                  Create One
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </m.div>
  );
};

export default CoSignInPage;
