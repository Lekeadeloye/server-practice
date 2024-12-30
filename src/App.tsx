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
      {/* <h1 className="text-3xl font-bold underline text-blue-700">React Server Practice!{import.meta.env.VITE_GREETING} {import.meta.env.VITE_PORT}</h1> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
