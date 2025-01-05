import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Root from './routes/Root/Root.tsx'
import HomePage from "./routes/HomePage/HomePage.tsx";
import About from "./routes/About/About.tsx";
import Contact from "./routes/Contact/Contact.tsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root/>} >
    <Route path='/' element={<HomePage/>}> </Route>
    <Route path='/About' element={<About/>}> </Route>
    <Route path='/Contact' element={<Contact/>}> </Route>
  </Route>
))

function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
