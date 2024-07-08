import { DropOffModel } from "./dropoff.model";
import { DropOffInterface } from "./dropoff.types";


export const getAllDropOffs = async (freight_id:string)=>{
    const DropOff_query = await DropOffModel
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
        path: "pickup_id",
        select:"_id expected_dropoff_date"
    })
    .lean()
    .exec() as DropOffInterface[];
    return DropOff_query;
}


export const getDropOff = async (id:string)=>{
    const DropOff_query = await DropOffModel
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
        path: "pickup_id",
        select:"_id expected_dropoff_date"
    })
    .lean()
    .exec() as DropOffInterface;
    return DropOff_query;
}


export const getDropOffByName = async (name:string)=>{
    const DropOff_query = await DropOffModel
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
        path: "pickup_id",
        select:"_id expected_dropoff_date"
    })
    .lean()
    .exec() as DropOffInterface;
    return DropOff_query;
}


export const addDropOff = async (DropOff: DropOffInterface)=>{
    const DropOff_mutation  = await DropOffModel.create(DropOff) as DropOffInterface;
    return DropOff_mutation;
}



