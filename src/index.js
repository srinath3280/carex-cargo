import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './views/home/home';
import FreeQuote from './views/freeQuote/freequote';
import Lcl from './views/freeQuote/lcl/lcl';
import Fcl from './views/freeQuote/fcl/fcl';
import Blog from './views/blog/blog';
import Contact from './views/contact/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blog></Blog>
      },
      {
        path:'/free-quote',
        element:<FreeQuote></FreeQuote>,
        children:[
          {
            path:'/free-quote/fcl-request-quote',
            element:<Fcl></Fcl>
          },
          {
            path:'/free-quote/lcl-request-quote',
            element:<Lcl></Lcl>
          }
        ]
      },
      {
        path:'/contact-us',
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
