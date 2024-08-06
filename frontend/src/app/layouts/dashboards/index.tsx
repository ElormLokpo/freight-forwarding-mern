import React, { useEffect, useState } from 'react'
import {Outlet, useNavigate} from "@tanstack/react-router"
import { IProps } from './types';
import { co_auth_route as route } from '@/constants/routes';
import { useSelector, useDispatch } from 'react-redux';
import { storeCurrentFreightCompany } from '@/services/redux/slices/freight-company';
import { FreightCompanyInterface } from '@/services/redux/slices/freight-company/types';

const DashboardLayout:React.FC<IProps> = ({SideNav}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false);
  const navigate  = useNavigate()
  const user_token = useSelector((state:any)=>state.coAuth.value.tokens.access_token);
  

  useEffect(()=>{
    if(!user_token){
      setIsAuthenticated(false);
      navigate({
        to:route.signin
      })
    }

    if (user_token){
     
      setIsAuthenticated(true);
    }
   
  },[isAuthenticated, navigate])

  if(isAuthenticated){  
    return <div className='dark:bg-black dark:text-white h-screen grid grid-cols-15'>
        <div className='col-span-2 border-r'>
          {SideNav}
        </div>

        <div className='col-span-13'>
         
          <Outlet />
        </div>
    </div>
    }
  else{
    return null
    
  }
  
}

export default DashboardLayout