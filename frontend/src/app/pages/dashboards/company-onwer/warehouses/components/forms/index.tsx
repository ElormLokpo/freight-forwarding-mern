import {
  Form,
  FormLabel,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import {Toaster, toast} from "sonner"
  
import { Input } from "@/components/ui/input";
import { WarehouseSchema, WarehouseSchemaType } from "@/lib/schema/warehouse";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {useSelector} from "react-redux";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";
import { MainButton } from "@/app/components/button";
import { FiPlusCircle } from "react-icons/fi";
import { useAddWarehouseMutation } from "@/services/api";


export const AddWarehouseForm: React.FC = () => {
  const [addWarehouse,{isLoading}] = useAddWarehouseMutation();

  const form = useForm<WarehouseSchemaType>({
    resolver: zodResolver(WarehouseSchema),
    defaultValues: {
      name: "",
      location: "",
      freight_company_id: "",
    },
  });

  const freightCompaines: FreightCompanyInterface[] = useSelector((state:any)=>state.freightCompany.value.all_freight_companies);

  const handleSubmit = async (data: WarehouseSchemaType)=>{
      const response = await addWarehouse({payload:data})

      toast.success("Warehouse added successfully");
  }

  const onSubmit = (data: WarehouseSchemaType) => {
      handleSubmit(data)
  };

  return (
    <div className="">
       <Toaster />


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-2">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse Name:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="warehouse name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-4">
            <FormField
              name="location"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse Location:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="warehouse location"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-4">
            <FormField
              control={form.control}
              name="freight_company_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Freight Companies:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a freight company to add warehouse to" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                     {
                        
                      freightCompaines.map(i=><SelectItem value={i._id}>
                        {i.company_name}
                      </SelectItem>)
                      }
                     
                    </SelectContent>
                  </Select>
                
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
              <MainButton>
                <div className="flex items-center gap-2">
                  <FiPlusCircle />
                  {
                  
                  isLoading ? <p>Adding warehouse...</p> : <p>Add warehouse</p>
                  }
                </div>
              </MainButton>
          </div>

        </form>
      </Form>
    </div>
  );
};
