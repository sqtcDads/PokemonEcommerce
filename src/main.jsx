import App from "./App.jsx";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemListContainer from "./routes/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./routes/ItemDetailContainer/ItemDetailContainer.jsx";



const firebaseConfig = {
  apiKey: "AIzaSyBXBlTrAexHKdUF5TKaMgynPJhPZmpN0FA",
  authDomain: "coderfirebase.firebaseapp.com",
  projectId: "coderfirebase",
  storageBucket: "coderfirebase.appspot.com",
  messagingSenderId: "913853059833",
  appId: "1:913853059833:web:7a95f6659c8a2391f2c828"
};
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)

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
