import { ShipmentModel } from "./shipment.model";
import { ShipmentInterface } from "./shipment.types";


export const getAllShipments = async (freight_id:string)=>{
    const Shipment_query = await ShipmentModel
    .find({freight_company: freight_id})
    .populate({
        path: "freight_company",
        select:"_id company_name"
    })
    .populate({
        path: "current_warehouse",
        select: "_id name"
    })
    .populate({
        path: "warehouse_trail",
        select: "_id name"
    })
    .populate({
        path:"current_vehicle",
        select:"_id name tracking_number"
    })
    .populate({
        path:"processed_by",
        select:"firstname lastname email _id"
    })
    .populate({
        path: "pickups",
        select: "_id expected_pickup_date"
    })
    .populate({
        path: "dropoffs",
        select: "_id expected_dropoff_date"
    })
    .lean()
    .exec() as ShipmentInterface[];
    return Shipment_query;
}


export const getShipment = async (id:string)=>{
    const Shipment_query = await ShipmentModel
    .findById(id)
    .populate({
        path: "freight_company",
        select:"_id company_name"
    })
    .populate({
        path: "current_warehouse",
        select: "_id name"
    })
    .populate({
        path: "warehouse_trail",
        select: "_id name"
    })
    .populate({
        path:"current_vehicle",
        select:"_id name tracking_number"
    })
    .populate({
        path:"processed_by",
        select:"firstname lastname email _id"
    })
    .populate({
        path: "pickups",
        select: "_id"
    })
    .populate({
        path: "dropoffs",
        select: "_id"
    })
    .lean()
    .exec() as ShipmentInterface;
    return Shipment_query;
}


export const getShipmentByName = async (name:string)=>{
    const Shipment_query = await ShipmentModel
    .findOne({name})
    .populate({
        path: "freight_company",
        select:"_id company_name"
    })
    .populate({
        path: "current_warehouse",
        select: "_id name"
    })
    .populate({
        path: "warehouse_trail",
        select: "_id name"
    })
    .populate({
        path:"current_vehicle",
        select:"_id name tracking_number"
    })
    .populate({
        path:"processed_by",
        select:"firstname lastname email _id"
    })
    .populate({
        path: "pickups",
        select: "_id"
    })
    .populate({
        path: "dropoffs",
        select: "_id"
    })
    .lean()
    .exec() as ShipmentInterface;
    return Shipment_query;
}


export const addShipment = async (Shipment: ShipmentInterface)=>{
    const Shipment_mutation  = await ShipmentModel.create(Shipment) as ShipmentInterface;
    return Shipment_mutation;
}



