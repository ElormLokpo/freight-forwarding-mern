import {router} from "../main"
import {RouterProvider} from "@tanstack/react-router";

const Provider = () => {
  return (
    <>
        <RouterProvider router = {router} />
    </>
  )
}

export default Provider