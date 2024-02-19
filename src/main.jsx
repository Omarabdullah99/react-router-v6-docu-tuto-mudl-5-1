import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";
import Contact from "./Contact";
import { contactGetLoader, getContactloaderById } from "./loaders/contactLoaders";
import { DeleteContactaction, EditContactaction, createContactaction } from "./actions/actionContact";
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
      {
        path: "/contacts/:contactId/destroy",
        action: DeleteContactaction,
        errorElement: <div>Oops! There was an error.</div>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
