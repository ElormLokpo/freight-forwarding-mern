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
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import {useSelector} from "react-redux";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";
import { MainButton } from "@/app/components/button";
import { FiPlusCircle } from "react-icons/fi";
import { useAddWarehouseStaffMutation } from "@/services/api";
import { WarehouseStaffSchemaType, WarehouseStaffSchema } from "@/lib/schema/warehouse-staff";
import { WarehouseInterface } from "@/services/redux/slices/warehouse/types";


export const AddWarehouseStaffForm: React.FC = () => {
  const [addWarehouseStaff,{isLoading}] = useAddWarehouseStaffMutation();

  const form = useForm<WarehouseStaffSchemaType>({
    resolver: zodResolver(WarehouseStaffSchema),
    defaultValues: {
      fullname:"",
      phone:"",
      role:"",
      warehouse_id:"",
      freight_company_id: ""
    },
  });

  const freightCompaines: FreightCompanyInterface[] = useSelector((state:any)=>state.freightCompany.value.all_freight_companies);
  const warehouses: WarehouseInterface[] = useSelector((state:any)=>state.warehouse.value.all_warehouses);

  const handleSubmit = async (data: WarehouseStaffSchemaType)=>{
      const response = await addWarehouseStaff({payload:data})

      toast.success("Warehouse staff added successfully");
  }

  const onSubmit = (data: WarehouseStaffSchemaType) => {
      handleSubmit(data)
  };

  return (
    <div className="">
       <Toaster />


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-2">
            <FormField
              name="fullname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouse Staff Fullname:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Fullname"
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
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Phone Number:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="eg.055343434"
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
              name="role"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Staff Role:</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="staff role"
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

          <div className="mb-4">
            <FormField
              control={form.control}
              name="warehouse_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Warehouses:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a warehouse to add warehouse staff to" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                     {
                        
                      warehouses.map(i=><SelectItem value={i._id}>
                        {i.name}
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
                  
                  isLoading ? <p>Adding warehouse staff...</p> : <p>Add warehouse staff</p>
                  }
                </div>
              </MainButton>
          </div>

        </form>
      </Form>
    </div>
  );
};
