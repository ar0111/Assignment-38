
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Nothing from './components/Nothing/Nothing'
import Shop from './components/Shop/Shop'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import PrivateRoute from './PrivateRoute/PrivateRoute'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/home",
          element: <Home></Home>
        },
        {
          path:"/order",
          element: <Shop></Shop>,
          loader: ()=> fetch('products.json')
        },
        {
          path:"/cart",
          element: <Cart></Cart>,
          loader: ()=> fetch('products.json')
        },
        {
          path:"*",
          element: <Nothing></Nothing>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
