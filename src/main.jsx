import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubinfoloader } from './components/Github/Github'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      }
      ,
      {
        path:'user/:userid',
        element:<User/>
      },
      {
         
        path:'github',
        element:<Github/>,
        loader:githubinfoloader,
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}/>
  </StrictMode>,
)
