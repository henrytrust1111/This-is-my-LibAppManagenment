import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import IntroPage from './Components/pages/Intro/IntroPage'
import Loginpage from './Components/Auth/Loginpage'
import HomePage from './Components/pages/Home/homepage'

const route=createBrowserRouter([
  {
    path:"/",
    element:<IntroPage />
  },
  {
    path:"/login",
    element:<Loginpage />
  },
  {
    path:"/home",
    element:<HomePage />
  },
])


function App() {
  return (
    <RouterProvider router={route} />
  )
}

export default App
