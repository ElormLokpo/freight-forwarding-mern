
const co_route_base= "/dashboards/co/";

export const co_route = {
    freight_company:`${co_route_base}freight-company`,
    shipment:`${co_route_base}shipment`,
    vehicle:`${co_route_base}vehicle`,
    warehouse:`${co_route_base}warehouses`,
    warehouse_staff: `${co_route_base}warehouse-staff`,
    warehouse_planner: `${co_route_base}planner/warehouse-planner`
}

const co_auth_base = "/co/"
export const co_auth_route = {
    signin: `${co_auth_base}signin`,
    signup: `${co_auth_base}signup`,

}


export const backend_api_route = import.meta.env.VITE_BACKEND_ENDPOINT