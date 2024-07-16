import { IProps } from "./types"

export const MainButton:React.FC<IProps> = ({children, className})=>{
    const buttonStyle = "bg-black dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white hover:bg-gray-800 text-xs font-semibold py-2 px-2 rounded"
    return <button className={className ? className : buttonStyle}>{children}</button>
}