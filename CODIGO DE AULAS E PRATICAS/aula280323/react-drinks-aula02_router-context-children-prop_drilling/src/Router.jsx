import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";
import { UserProfile } from "./pages/UserProfile/UserProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/produtos", element: <Products /> },
      { path: "/usuario", element: <UserProfile /> },
    ],
  },
]);
