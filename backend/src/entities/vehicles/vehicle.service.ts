import { VehicleModel } from "./vehicle.model";
import { VehicleInterface } from "./vehicle.types";


export const getAllVehicles = async (freight_id:string)=>{
    const Vehicle_query = await VehicleModel
    .find({freight_company_id: freight_id})
    .populate({
        path: "freight_company",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse",
        select:"_id name"
    })
    .populate({
        path: "driver",
        select:"_id staff_id fullname"
    })
    .populate({
        path: "shipment",
        select:"_id name tracking_number"
    })
    .lean()
    .exec() as VehicleInterface[];
    return Vehicle_query;
}


export const getVehicle = async (id:string)=>{
    const Vehicle_query = await VehicleModel
    .findById(id)
    .populate({
        path: "freight_company",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse",
        select:"_id name"
    })
    .populate({
        path: "driver",
        select:"_id staff_id fullname"
    })
    .populate({
        path: "shipment",
        select:"_id name tracking_number"
    })
    .lean()
    .exec() as VehicleInterface;
    return Vehicle_query;
}


export const getVehicleByName = async (name:string)=>{
    const Vehicle_query = await VehicleModel
    .findOne({name})
    .populate({
        path: "freight_company",
        select:"_id company_name"
    })
    .populate({
        path: "warehouse",
        select:"_id name"
    })
    .populate({
        path: "driver",
        select:"_id staff_id fullname"
    })
    .populate({
        path: "shipment",
        select:"_id name tracking_number"
    })
    .lean()
    .exec() as VehicleInterface;
    return Vehicle_query;
}


export const addVehicle = async (Vehicle: VehicleInterface)=>{
    const Vehicle_mutation  = await VehicleModel.create(Vehicle) as VehicleInterface;
    return Vehicle_mutation;
}



