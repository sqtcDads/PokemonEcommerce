import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "./routes/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./routes/ItemDetailContainer/ItemDetailContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemListContainer />,
  },
  {
    path: "/category/:id",
    element: <ItemListContainer />,
  },

  {
    path: "/item/:id",
    element: <ItemDetailContainer />,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
