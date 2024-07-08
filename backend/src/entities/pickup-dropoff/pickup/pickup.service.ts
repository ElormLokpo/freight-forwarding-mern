import { PickUpModel } from "./pickup.model";
import { PickUpInterface } from "./pickup.types";


export const getAllPickUps = async (freight_id:string)=>{
    const PickUp_query = await PickUpModel
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
        path: "vehicle",
        select:"_id staff_id fullname"
    })
    .populate({
        path: "shipment",
        select:"_id name tracking_number"
    })
    .populate({
        path: "dropoff_id",
        select:"_id expected_dropoff_date"
    })
    .lean()
    .exec() as PickUpInterface[];
    return PickUp_query;
}


export const getPickUp = async (id:string)=>{
    const PickUp_query = await PickUpModel
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
        path: "vehicle",
        select:"_id staff_id fullname"
    })
    .populate({
        path: "shipment",
        select:"_id name tracking_number"
    })
    .populate({
        path: "dropoff_id",
        select:"_id expected_dropoff_date"
    })
    .lean()
    .exec() as PickUpInterface;
    return PickUp_query;
}


export const getPickUpByName = async (name:string)=>{
    const PickUp_query = await PickUpModel
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
        path: "vehicle",
        select:"_id staff_id fullname"
    })
    .populate({
        path: "shipment",
        select:"_id name tracking_number"
    })
    .populate({
        path: "dropoff_id",
        select:"_id expected_dropoff_date"
    })
    .lean()
    .exec() as PickUpInterface;
    return PickUp_query;
}


export const addPickUp = async (PickUp: PickUpInterface)=>{
    const PickUp_mutation  = await PickUpModel.create(PickUp) as PickUpInterface;
    return PickUp_mutation;
}



