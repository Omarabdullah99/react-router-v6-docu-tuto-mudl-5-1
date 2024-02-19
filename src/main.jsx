import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";
import Contact from "./Contact";
import { contactGetLoader, getContactloaderById } from "./loaders/contactLoaders";
import { EditContactaction, createContactaction } from "./actions/actionContact";
import EditContact from "./EditContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactGetLoader,
    action: createContactaction,

    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: getContactloaderById,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: getContactloaderById,
        action: EditContactaction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
