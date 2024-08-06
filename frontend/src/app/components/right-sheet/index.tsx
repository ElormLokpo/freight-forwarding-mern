import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"
import { IProps } from "./types"
import { MainButton } from "../button"

export const RightSheet:React.FC<IProps> = (props)=>{
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="flex gap-2 dark:text-white text-white bg-black text-sm items-center dark:bg-indigo-500 px-2 py-1 rounded hover:bg-gray-800 hover:dark:bg-indigo-700">
            {props.icon && props.icon}    
            {props.triggerButtonName}
            
        </button>
      
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{props.sheetTitle && props.sheetTitle}</SheetTitle>
          <SheetDescription>
            {props.sheetDescription && props.sheetDescription}
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-5">
            {props.form && props.form}
        </div>
        
        
      </SheetContent>
    </Sheet>
  )
}
