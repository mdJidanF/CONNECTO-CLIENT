import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch(`http://localhost:5000/all-districts`),
                element: <Home></Home>
            },
            {
                path: "/division/:name",
                loader: ({params}) => fetch(`http://localhost:5000/all-districts/${params.name}`),
                element: <Home/>
            }
        ]
    }
])