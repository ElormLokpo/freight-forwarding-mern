import {useState} from 'react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MainButton } from "@/app/components/button";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const ActionDropDown = () => {
    const [position, setPosition] = useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='bg-white hover:cursor-pointer rounded border text-black px-2 py-1 font-semibold border-2 border-gray-800 flex items-center justify-center'>
           <p>Actions</p>
        </div>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
         
          <DropdownMenuRadioItem value="bottom">Edit</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Delete</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ActionDropDown