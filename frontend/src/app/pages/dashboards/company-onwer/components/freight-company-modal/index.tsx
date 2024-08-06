import * as React from "react"
import { cn } from "@/lib/utils"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import CoFreightCompanyInitialForm from "../../freight-company/components/forms"

 const FreightCompanyModal = ()=>{
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="bg-gray-800 rounded py-1 px-2 text-white hover:cursor-pointer hover:bg-gray-700">+</div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[38rem] p-0 m-0 bg-red-400">
          <CoFreightCompanyInitialForm width="w-full"/>
        </DialogContent>
      </Dialog>
    )
  }

  
}

export default FreightCompanyModal;
