import {createBrowserRouter} from "react-router-dom";
import { auth_routes } from "./auth-routes";

const all_routes = [auth_routes];

export const router = createBrowserRouter(all_routes)