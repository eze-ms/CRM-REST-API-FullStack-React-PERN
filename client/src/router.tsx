import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader } from "./views/Products";
import NewProduct from "./views/NewProduct";
import { action as newProductAction } from "./actions/newProductActions";  // Importa la acción desde el nuevo archivo

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Products />,
                loader: productsLoader
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct />,
                action: newProductAction  // Asigna la acción importada
            }
        ]
    }
]);
