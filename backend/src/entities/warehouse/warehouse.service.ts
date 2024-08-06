import { WarehouseModel } from "./warehouse.model";
import { WarehouseInterface } from "./warehouse.types";
import { ShipmentModel } from "../../entities/shipment/shipment.model";


export const getAllWarehouses = async (freight_id:string)=>{
    const warehouse_query = await WarehouseModel
    .find({freight_company_id: freight_id})
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse_staff",
        select: "_id fullname staff_id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path: "incoming_shipment",
        select: "_id tracking_number name status weight_height"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .populate({
        path:"current_vehicles",
        select:"name tracking_number in_transit _id"
    })
    .lean()
    .exec() as WarehouseInterface[];
    return warehouse_query;
}


export const getWarehouse = async (id:string)=>{
    const warehouse_query = await WarehouseModel
    .findById(id)
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse_staff",
        select: "_id fullname staff_id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .populate({
        path:"current_vehicles",
        select:"name tracking_number in_transit _id"
    })
    .lean()
    .exec() as WarehouseInterface;
    return warehouse_query;
}


export const getWarehouseByName = async (name:string)=>{
    const warehouse_query = await WarehouseModel
    .findOne({name})
    .populate({
        path: "freight_company_id",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse_staff",
        select: "_id fullname staff_id"
    })
    .populate({
        path: "current_shipment",
        select: "_id tracking_number name status"
    })
    .populate({
        path:"manager_id",
        select:"firstname lastname email _id"
    })
    .populate({
        path:"current_vehicles",
        select:"name tracking_number in_transit _id"
    })
    .lean()
    .exec() as WarehouseInterface;
    return warehouse_query;
}


export const addWarehouse = async (warehouse: WarehouseInterface)=>{
    const warehouse_mutation  = await WarehouseModel.create(warehouse) as WarehouseInterface;
    return warehouse_mutation;
}

export const addIncomingShipment = async (shipment_id:string, warehouse_id:string)=>{
    const warehouse: WarehouseInterface = await WarehouseModel.findById(warehouse_id);
    const current_incoming_shipment = warehouse.incoming_shipment;
    const new_incoming_shipment = [...current_incoming_shipment, shipment_id];
   
    const warehouse_mutation = await WarehouseModel.findByIdAndUpdate(warehouse_id, {incoming_shipment: new_incoming_shipment},{new:true});
    const shipment_mutation = await ShipmentModel.findByIdAndUpdate(shipment_id,{is_assigned:true},{new:true})
    return true;
}