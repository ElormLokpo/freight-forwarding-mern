import { router } from '@/router';
import React from 'react';
import {RouterProvider} from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from '@/redux/store';

const Provider = () => {
  return (
       
        <ReduxProvider store={store}>
          <RouterProvider router={router}/>
        </ReduxProvider>
  )
}

export default Provider