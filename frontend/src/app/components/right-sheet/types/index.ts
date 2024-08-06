import React from "react";

export interface IProps{
    triggerButtonName?: string,
    icon?: React.ReactElement,
    sheetTitle?:string, 
    sheetDescription?:string,
    form?: React.ReactElement
}