import {router} from "../main"
import {RouterProvider} from "@tanstack/react-router";
import { ThemeProvider } from "./theme-provider";

const Provider = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router = {router} />
    </ThemeProvider>
  )
}

export default Provider