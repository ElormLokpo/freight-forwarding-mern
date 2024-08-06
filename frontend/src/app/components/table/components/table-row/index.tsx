import React from 'react'
import { IProps } from './types'
import { TableRow as CoreTableRow} from '@/components/ui/table'
import { TableCell as TableCellComp } from '../table-cell'
import DetailModal from '@/app/pages/dashboards/company-onwer/components/detail-modal'


export const TableRow:React.FC<IProps> = ({table}) => {
  return  table.getRowModel().rows.map((row:any)=>(
    <DetailModal row = {row}/>
  ))
}

