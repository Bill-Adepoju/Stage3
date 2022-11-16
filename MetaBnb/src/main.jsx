import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'

import Placetostay from "./Components/Placetostay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/placetostay",
    element: <Placetostay />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
