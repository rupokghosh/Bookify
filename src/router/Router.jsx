import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import App from "../App";
import Cart from "../pages/Cart";
import SearchPage from "../pages/SearchPage";
import NewRelease from "../pages/NewRelease";
import AllBooks from "../pages/AllBooks";
import SalesPage from "../pages/SalesPage";

const Router = () => {
  const router = createBrowserRouter([
    {
        path:'/', 
        element:<App/>
    },
    {
        path:'cart', 
        element:<Cart/>,
    }, 
    {
        path:'search',
        element:<SearchPage/>
    },
    {
        path:'sales',
        element:<SalesPage/>
    },
    {
        path:'allBooks',
        element:<AllBooks/>
    },
    {
        path:'newReleases',
        element:<NewRelease/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
