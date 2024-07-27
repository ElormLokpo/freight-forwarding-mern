import * as React from "react"
import { cn } from "@/lib/utils"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import ShipmentAssignForm from "../assign-form"
import { IProps } from "./types"



 const ShipmentAssignModal:React.FC<IProps> = (props)=>{
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-sm rounded py-1 px-2 dark:text-white hover:cursor-pointer">+</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[38rem] p-4 m-0 dark:bg-black">
            <ShipmentAssignForm warehouse_id = {props.warehouse_id}/>
        </DialogContent>
      </Dialog>
    )
  }

  
}

export default ShipmentAssignModal;
