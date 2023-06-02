import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import MoviesDetails from "../Pages/MoviesDetails/MoviesDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/movie-details/:id",
                element: <MoviesDetails></MoviesDetails>
            },
        ]
    },
]);