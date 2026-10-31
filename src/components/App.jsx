import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './layout/Layout'
import Home from './pages/Home'
import StarSheild from './pages/StarSheild'
import StarShip from './pages/StarShip'

const routes = createBrowserRouter([
  {
    path : "/" ,
    element : <Layout /> , 
    children : [
      {
        path : "/" ,
        element: <Home />
      },
      {
        path : "/starShield" ,
        element : <StarSheild />
      },
      {
        path : "/starShip" ,
        element : <StarShip />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={routes} /> 
  )
}

export default App
