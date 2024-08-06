import {createContext, useState} from "react";
import { WarehouseContextInterface } from "./types";

export const WarehouseContext = createContext<WarehouseContextInterface | undefined>(undefined);

export const WarehouseProvider:React.FC<any> = ({children})=>{
    const [value, setValue] = useState(0)
    
    return(
        <WarehouseContext.Provider value={{value, setValue}}>
            {children}
        </WarehouseContext.Provider>
    )
}