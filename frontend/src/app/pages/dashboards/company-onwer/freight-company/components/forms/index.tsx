import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MainButton } from "@/app/components/button";
import { useForm } from "react-hook-form";
import { FreightCompanySchema, FreightCompanySchemaType } from "@/lib/schema/freight-company";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { useAddFreightCompanyMutation } from "@/services/api/freight-company";
import {Link, useNavigate} from "@tanstack/react-router"
import { IProps } from "./types";

const CoFreightCompanyInitialForm:React.FC<IProps> = (props) => {
   const [addFreightCompany, {isLoading}] = useAddFreightCompanyMutation();
   const currentUserId = useSelector((state:any)=> state.coAuth.value.tokens.id);

   const navigate = useNavigate();


  const form = useForm<FreightCompanySchemaType>({
    resolver: zodResolver(FreightCompanySchema), 
    defaultValues:{
        company_name:"",
        address:{
            country: "Ghana",
            city: ""
        }, 
        email:"",
        phone:"",
        urls:"",
        owner:currentUserId
    }
  });

  const handleSubmit = async (data: FreightCompanySchemaType)=>{
    const response = await addFreightCompany({payload:data});
    
   
      navigate({
        to:"/dashboards/co/warehouses"
      })
    
  }

  const onSubmit = (data: FreightCompanySchemaType) => {
      handleSubmit(data);
  };

  const className = `dark:bg-gray-900 bg-white rounded p-3 ${props.width ? props.width : "w-[45rem]"}`

  return (
    <div className={className}>
      <div></div>

      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-3">
              <FormField
                name="company_name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="company name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-3 mb-5">
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
                    <FormLabel>Company Email:</FormLabel>
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
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Phone:</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="053223445"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-10">
              <FormField
                name="urls"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Webistes (if any, comma seperate them):</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="www.webisteone.com, www.secondweb.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4">
              <MainButton className="bg-black dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white hover:bg-gray-800 text-sm font-semibold py-3 px-2 rounded w-full">
                {
                    isLoading ? <div>Creating Company ...</div> : <div>Create Freight Fowarding Company</div> 
                }
              </MainButton>
            </div>

            <div className="flex justify-center items-center">
              {
                props.skipStep ? <Link to="/dashboards/co/warehouses" className="underline dark:text-gray-300 text-sm">Skip this step for now</Link> 
                :null
              }
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CoFreightCompanyInitialForm;
