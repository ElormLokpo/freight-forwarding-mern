import { router } from '@/router';
import React from 'react';
import {RouterProvider} from "react-router-dom";

const Provider = () => {
  return (
       
        <>
         <RouterProvider router={router}/>
        </>
  )
}

export default Provider