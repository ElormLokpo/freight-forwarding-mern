import { RouterProvider } from "@tanstack/react-router"
import {router} from "../main";

const Provider = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Provider