import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Signup from "./pages/Signup";
import store from "./redux/store";
import { Provider } from "react-redux";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "productdetails/:filterid",
                element: <Menu />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "newproduct",
                element: <NewProduct />,
            },
            {
                path: "success",
                element: <Success />,
            },
            {
                path: "cancel",
                element: <Cancel />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Provider>
);
