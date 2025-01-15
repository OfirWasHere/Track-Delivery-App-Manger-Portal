import RouteModel from "../Models/RouteModel"

const RoutesNav: RouteModel[] = [
    {
        path: "/",
        toPath: "home",
        routeName: "ראשי",
        RouteID: "header-section"
    },
    {
        path: "/",
        toPath: "about",
        routeName: "עלינו",
        RouteID: "about-section"
    },
    {
        path: "/",
        toPath: "contact",
        routeName: "צרו קשר",
        RouteID: "contact-section"
    },
]

export default RoutesNav;