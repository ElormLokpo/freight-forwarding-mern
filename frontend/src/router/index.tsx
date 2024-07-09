import {createBrowserRouter} from "react-router-dom";
import { companyOwnerDashboardRoute } from "./app";

export const mainRoutes = [companyOwnerDashboardRoute]
export const router = createBrowserRouter(mainRoutes);