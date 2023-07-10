import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx/Home";
import Products from "./pages/Products.jsx/Products";
import Product from "./pages/Product.jsx/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import './app.scss'

function App() {

  const Layout = () => {
    return (
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/products/:id",
          element: <Products/>
        },
        {
          path: "/product/:id",
          element: <Product/>
        }
      ]
    }
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
