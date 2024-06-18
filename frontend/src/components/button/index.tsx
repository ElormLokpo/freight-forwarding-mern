import React, {ReactNode} from 'react'

interface IProps{
    children: ReactNode,
    bgColor?: string,
    textColor?: string,
    hoverColor?: string
}

const PButton:React.FC<IProps> = (props) => {
    let bgColor = props.bgColor ?? "bg-black";
    let textColor = props.textColor ?? "text-white"
    let hoverColor = props.hoverColor ?? "bg-gray-500"

    let buttonStyle= `${bgColor} text-sm py-3 ${textColor} font-semibold rounded w-full hover:${hoverColor}`

  return (
    <button className={buttonStyle}>
        {props.children}
    </button>
  )
}

export default PButton