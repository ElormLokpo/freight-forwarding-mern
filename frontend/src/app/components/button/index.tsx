import { IProps } from "./types"

export const MainButton:React.FC<IProps> = ({children, className})=>{
    const buttonStyle = "bg-black text-white hover:bg-gray-800 text-xs font-semibold py-2 px-2 rounded"
    return <button className={className ? className : buttonStyle}>{children}</button>
}