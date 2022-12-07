import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Member from './Pages/Member';
import Event from './Pages/Event';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Member",
    element: <Member/>,
  },
  {
    path: "Event",
    element: <Event/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


