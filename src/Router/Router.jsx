import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Roots/Root';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true, 
            path: "/",
            Component: Home
        },
        {
            path: "Apps", Component: Apps
        },
        {
            path: "Installation", Component: Installation
        }
    ]
  },
]);