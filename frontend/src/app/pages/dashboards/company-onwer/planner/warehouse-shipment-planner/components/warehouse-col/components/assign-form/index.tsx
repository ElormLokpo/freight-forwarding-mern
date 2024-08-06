import React from "react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WarehouseInterface } from "@/services/redux/slices/warehouse/types";
import { useSelector } from "react-redux";
import {
  WarehouseAssignSchema,
  WarehouseAssignSchemaType,
} from "@/lib/schema/planner/warehouse-assign";
import { ShipmentInterface } from "@/services/redux/slices/shipment/types";
import { IProps } from "./types";
import { MainButton } from "@/app/components/button";

const ShipmentAssignForm: React.FC<IProps> = (props) => {
  const shipment: ShipmentInterface[] = useSelector(
    (state: any) => state.shipment.value.all_shipment
  );

  const form = useForm<WarehouseAssignSchemaType>({
    resolver: zodResolver(WarehouseAssignSchema),
    defaultValues: {
      shipment_id: "",
    },
  });

  const onSubmit = (data: WarehouseAssignSchemaType)=>{
    console.log(props.warehouse_id);
    console.log(data);
  }

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4">
            <FormField
              control={form.control}
              name="shipment_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Shipment:</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select shipment to assign to warehouse" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {shipment.map((i) => (
                        <SelectItem value={i._id}>{i.name}</SelectItem>
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
                <p>Assign to warehouse</p>
            </MainButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ShipmentAssignForm;
