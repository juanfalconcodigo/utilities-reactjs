import React from 'react'
import ReactDOM from 'react-dom/client'

import './main.scss';

import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { UserProvider } from './context/userProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
