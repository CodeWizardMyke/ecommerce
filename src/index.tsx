//base importeds by app
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



//imported bootrstarp by application
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

//entrypoints application
import App from './App';
import Home from './pages/home/HomePage';

//create routes for application
const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
        //set outers pages and path
        {
          path: '/',
          element: <Home/>
        }
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