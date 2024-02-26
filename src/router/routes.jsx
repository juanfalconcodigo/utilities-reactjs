import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/Home.page";
import { AboutPage } from "../pages/About.page";
import { MainPage } from "../pages/Main.page";

export const router = createBrowserRouter([
    {
        path: '/',
        element: < MainPage />,
        children:[
            {
                path:'home',
                element: < HomePage />,
            },
            {
                path: 'about',
                element: < AboutPage />
            },
            {
                path: '*',
                element: <Navigate to="home" replace />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" replace />
    }
])