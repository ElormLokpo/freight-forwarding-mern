import {useState} from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import {FaRegMoon } from "react-icons/fa";  
import { IProps } from './types';

const ThemeDropDown:React.FC<IProps> = ({navStyle}) => {
  const [position, setPosition] = useState("bottom")


  return (
    <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className={navStyle}>
                  <p><FaRegMoon /> </p>
                  <p>Theme</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  
                  <DropdownMenuRadioItem value="bottom">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    Dark
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
  )
}

export default ThemeDropDown