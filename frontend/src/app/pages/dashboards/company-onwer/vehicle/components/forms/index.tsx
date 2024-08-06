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
} from "@/components/ui/select";

import { Toaster, toast } from "sonner";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { FreightCompanyInterface } from "@/services/redux/slices/freight-company/types";
import { MainButton } from "@/app/components/button";
import { FiPlusCircle } from "react-icons/fi";
import { useAddVehicleMutation } from "@/services/api/vehicle";
import { VehicleSchemaType, VehicleSchema } from "@/lib/schema/vehicle";

export const AddVehicleForm: React.FC = () => {
  const [addVehicle, { isLoading }] = useAddVehicleMutation();

  const form = useForm<VehicleSchemaType>({
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      name: "",
      number_plate: "",
      max_capacity: {
        units: "",
        weightValue: "",
        heightValue: "",
      },
      driver: {
        fullname: "",
        license_number: "",
      },
      freight_company_id: "",
    },
  });

  const freightCompaines: FreightCompanyInterface[] = useSelector(
    (state: any) => state.freightCompany.value.all_freight_companies
  );

  const handleSubmit = async (data: VehicleSchemaType) => {
    const response = await addVehicle({ payload: data });

    toast.success("Vehicle added successfully");
  };

  const onSubmit = (data: VehicleSchemaType) => {
    handleSubmit(data);
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
                  <FormLabel>Vehicle Name:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="vehicle name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-4">
            <FormField
              name="number_plate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vehicle Number Plate:</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="number plate" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <p className="mb-2 font-semibol">Vehicle Maximum Capacity:</p>

            <div className="mb-4">
              <FormField
                name="max_capacity.units"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Units:</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="eg.kg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex gap-2">
              <div className="mb-4">
                <FormField
                  name="max_capacity.weightValue"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Weight:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="maximum weight"
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
                  name="max_capacity.heightValue"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maximum Height:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="maximum height"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
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
                      {freightCompaines.map((i) => (
                        <SelectItem value={i._id}>{i.company_name}</SelectItem>
                      ))}
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
                {isLoading ? (
                  <p>Adding Vehicle...</p>
                ) : (
                  <p>Add Vehicle</p>
                )}
              </div>
            </MainButton>
          </div>
        </form>
      </Form>
    </div>
  );
};
