import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./Error";
import Contact from "./Contact";
import {
  contactGetLoader,
  getContactloaderById,
} from "./loaders/contactLoaders";
import {
  DeleteContactaction,
  EditContactaction,
  FavouriteContactaction,
  createContactaction,
} from "./actions/actionContact";
import EditContact from "./EditContact";
import IndexContent from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: contactGetLoader,
    action: createContactaction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <IndexContent /> },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: getContactloaderById,
            action: FavouriteContactaction,
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
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
