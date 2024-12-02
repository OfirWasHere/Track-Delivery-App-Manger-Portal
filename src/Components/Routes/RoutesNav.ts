import RouteModel from "../Models/RouteModel"

const RoutesNav: RouteModel[] = [
    {
        path: '/',
        toPath: "home",
        routeName: 'דף הבית'
    },
    {
        path: '/',
        toPath: "about",
        routeName: 'עלינו'
    },
    {
        path: '/',
        toPath: "contact",
        routeName: 'צרו קשר'
    },
]

export default RoutesNav;