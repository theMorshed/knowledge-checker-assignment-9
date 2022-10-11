import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Layout from "../components/Layout";
import Statistics from "../components/Statistics";
import Subjects from "../components/Subjects";
import Quiz from "../components/Quiz";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Subjects />
            },
            {
                path: '/home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Subjects />
            },
            {
                path: '/statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/api/quiz/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Quiz />
            }
        ]
    }
]);