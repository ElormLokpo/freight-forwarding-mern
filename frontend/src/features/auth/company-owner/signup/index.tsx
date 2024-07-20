import { SignUpSchema, SignUpSchemaType } from "@/lib/schema";
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
import {motion as m} from "framer-motion";
import { slideInTop } from "@/animation";
import { useSignupMutation } from "@/services/api/auth";
import {toast} from "sonner";

const CoSignUpPage = () => {
  const [signUp, {isLoading}] = useSignupMutation();
  const navigate = useNavigate()
  
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      othernames: "",
      address: {
        country: "",
        city: "",
      },
      email: "",
      passwordHash: "",
      role: {
        role: "CompanyOwner",
        section: "Freight",
      },
    },
  });

  const handleSignUpUser = async(data: SignUpSchemaType)=>{
    const response = await signUp({payload: data});
    
    
    toast.success("Account created successfully");
    navigate({
      to:"/co/company-initial"
    })

  }

  const onSubmit = (data: SignUpSchemaType) => {
      handleSignUpUser(data)
  };

  return (
    <m.div
      variants={slideInTop}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-[450px]"
    >
      <div className="font-bold mb-3">
        <span className="dark:text-indigo-500">Shipper</span> <span className="font-light"> &gt; Sign Up </span>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded p-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-3 mb-2">
              <div className="mb-2 w-full">
                <FormField
                  name="firstname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Firstname:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="firstname" {...field} />
                      </FormControl>
                    <FormMessage />

                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-2 w-full">
                <FormField
                  name="lastname"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lastname:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="lastname" {...field} />
                      </FormControl>
                    <FormMessage />

                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mb-4">
              <FormField
                name="othernames"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Othernames:</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="othernames" {...field} />
                    </FormControl>
                    <FormMessage />

                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3 mb-4">
              <div className="mb-2 w-full">
                <FormField
                  name="address.country"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="country" {...field} />
                      </FormControl>
                    <FormMessage />

                    </FormItem>
                  )}
                />
              </div>
              <div className="mb-2 w-full">
                <FormField
                  name="address.city"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City:</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="city" {...field} />
                      </FormControl>
                    <FormMessage />

                    </FormItem>
                  )}
                />
              </div>
            </div>

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
                name="passwordHash"
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
                {isLoading?<div>
                  Signing you up ...
                </div>
                : <div>
                    <p>Sign Up</p>
                  </div>}
                
               
              </MainButton>
            </div>

            <div className="flex justify-center">
              <p className="text-xs">
                Already have an account?{" "}
                <Link
                  to={auth_route.signin}
                  className="underline font-semibold"
                >
                  Sign in.
                </Link>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </m.div>
  );
};

export default CoSignUpPage;
