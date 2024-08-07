import React from 'react'
import { IProps } from './types'

const WarehouseDetail:React.FC<IProps> = ({row}) => {
  return (
    <div className='p-5 dark:text-gray-300'>
      <p className='font-semibold text-lg mb-5'>Warehouse Details</p>
      
      <div className='grid grid-cols-3 gap-3 mb-8'>
        <div>
           <p className='text-sm mb-1 dark:text-gray-400'>Warehouse:</p>
           <p className="py-1 border-b px-1">{row.original?.name}</p>
        </div>

        <div>
           <p className='text-sm mb-1 dark:text-gray-400'>Warehouse Location?:</p>
           <p className="py-1 border-b px-1">{row.original?.location}</p>
        </div>

        <div>
           <p className='text-sm mb-1 dark:text-gray-400'>Warehouse Vacant?:</p>
           <p className="py-1 border-b px-1">{row.original?.warehouse_vacant? "true":"false"}</p>
        </div>

      </div>

      <div className='mb-8'>
        <div>
           <p className='text-sm mb-1 dark:text-gray-400'>Freight Company Name:</p>
           <p className="py-1 px-1 border-b">{row.original?.freight_company_id.company_name}</p>
        </div>

        

        

      </div>



      <div className='grid grid-cols-3 gap-3 mb-'>
        <div>
           <p className='text-sm mb-2 dark:text-gray-400'>No. of Staff:</p>
           <p className="font-semibold py-1 border-b px-1">{row.original?.warehouse_staff.length}</p>
        </div>

        <div>
           <p className='text-sm mb-2 dark:text-gray-400'>No. of Current Shipment:</p>
           <p className="font-semibold py-1 border-b px-1">{row.original?.current_shipment.length}</p>
        </div>

        <div>
           <p className='text-sm mb-2 dark:text-gray-400'>No. of Current Vehicles:</p>
           <p className="font-semibold py-1 border-b px-1">{row.original?.current_vehicles.length}</p>
        </div>

      </div>

      


    </div>
  )
}

export default WarehouseDetail