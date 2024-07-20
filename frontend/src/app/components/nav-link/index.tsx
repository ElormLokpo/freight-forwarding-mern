import {Link} from "@tanstack/react-router";
import { IProps } from "./types";


export const NavLink:React.FC<IProps> = ({to, children, styleName, activeStyle})=>{
    
    return(
        <Link to={to} className={styleName} activeProps={{className:activeStyle}}>{children}</Link>
    )
}