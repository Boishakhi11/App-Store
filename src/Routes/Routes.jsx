import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Roots/Root';
import Home from '../pages/Home/Home';
import Apps from '../pages/Apps/Apps';
import Installation from '../pages/Installation/Installation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AppDetails from '../pages/AppDetails/AppDetails';
import AppErrorPage from '../pages/AppErrorPage/AppErrorPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true, 
            loader: ()=> fetch('apps.json'),
            path: "/",
            Component: Home
        },
        {
            loader: ()=> fetch('allApps.json'),
            path: "Apps", 
            Component: Apps
        },
        {
            path: "Installation", Component: Installation
        },
        {
          loader: ()=> fetch('allApps.json'),
          path: "/Appdetails/:id",
          errorElement: <AppErrorPage></AppErrorPage>,
          Component: AppDetails
        }
    ]
  },
]);