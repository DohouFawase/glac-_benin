import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/layout";
import Homepage from "../pages/homepage";
import AboutPage from "../pages/aboutPage";
import Boutique from "../pages/boutiquePage";
import EventPage from "../pages/enevtPage";
import DetailPage from "../pages/detailPage";
import ErrorPage from "../pages/error/errorPage";
ErrorPage
const root = createBrowserRouter([
    {
        path:"",
        element:<Layout />,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"",
                element:<Homepage />
            },
            {
                path:"/about",
                element:<AboutPage/>
            },
            {
                path:"/product",
                element:<Boutique/>
            },
            {
                path:'/event',
                element:<EventPage/>
            },

            {
                path:"details/:id",
                element:<DetailPage />
            }
        ]
    }
])

export default root