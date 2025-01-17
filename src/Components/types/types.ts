export type RoutesModel = {
    path: string;
    element: JSX.Element;
    errorElement: JSX.Element;
    children?: any;
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

