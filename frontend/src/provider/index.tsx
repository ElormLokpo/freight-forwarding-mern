import { router } from "../main";
import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "./theme-provider";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/services/redux";

const Provider = () => {
  return (
    <ReduxProvider store = {store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Provider;
