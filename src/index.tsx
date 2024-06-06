//base importeds by app
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

//entrypoints application
import App from './App';

//create routes for application
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
        //set outers pages and path
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);