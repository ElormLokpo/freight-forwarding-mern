import React from 'react'
import {Outlet} from "@tanstack/react-router"
import { IProps } from './types'

const DashboardLayout:React.FC<IProps> = ({SideNav}) => {
  return (
    <div className='dark:bg-black dark:text-white h-screen grid grid-cols-15'>
        <div className='col-span-2 border-r'>
          {SideNav}
        </div>

        <div className='col-span-13'>
          <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout