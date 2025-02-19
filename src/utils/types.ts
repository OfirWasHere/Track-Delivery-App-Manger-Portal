import { RouteObject } from "react-router-dom";

export type RoutesModel = {
    path: string;
    element: JSX.Element;
    errorElement: JSX.Element;
    children?: RouteObject[];
}

export type RouteModel = {
    path: string;
    routeName: string;
    RouteID?: string;
}

export type LoginServiceModal = {
    email: string;
    password: string;
}