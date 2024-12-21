import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import PostList from './pages/PostList.jsx'
import SinglePost from './pages/SinglePost.jsx'
import Write from './pages/Write.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import MainLayout from './layouts/Main.jsx'

const router = createBrowserRouter([
  {
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/posts',
        element: <PostList/>
      },
      {
        path:'/:slug',
        element: <SinglePost/>
      },
      {
        path:'/write',
        element: <Write/>
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
