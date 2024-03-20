import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'
import Terms from "./Pages/Terms.jsx";
import Home from "./Components/Hero.jsx";
// import { BrowserRouter } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route index={true} path='/' element={<App/>}/>
       <Route  path='/terms-conditions' element={<Terms/>}/>   
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>

)
