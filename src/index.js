import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Checkout, CheckoutPayment, ContactInfoPage, NavBar } from "./ui-components"
import { ActionCardCollection } from './ui-components';
import { Amplify } from 'aws-amplify'
import awsconfig from "./aws-exports"
import "@aws-amplify/ui-react"

Amplify.configure(awsconfig)

const router = createBrowserRouter([
   { path: "/", element: <App />},
   { path:"/home", element: <App />},
   { path:"/contact", element: <ContactInfoPage/>},
   { path:"/products", element: <ActionCardCollection/>},
   { path:"/checkout", element: <CheckoutPayment/>},
   { path:"/payment", element: <Checkout/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <NavBar width="100%"/>
    </div>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
