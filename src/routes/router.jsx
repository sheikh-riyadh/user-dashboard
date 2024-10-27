import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashbaord/Dashboard";
import AccountTransaction from "../pages/AccountTransaction/AccountTransaction";
import Address from "../pages/Address/Address";
import Cart from "../pages/Cart/Cart";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import EditProfile from "../pages/EditProfile/EditProfile";
import Order from "../pages/Order/Order";
import Review from "../pages/Review/Review";
import Wishlist from "../pages/Wishlist/Wishlist";
import Feedback from "../pages/Feedback/Feedback";
import Report from "../pages/Report/Report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "account-transaction",
        element: <AccountTransaction />,
      },
      {
        path: "address",
        element: <Address />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
      {
        path: "my-cart",
        element: <Cart />,
      },
      {
        path: "my-reviews",
        element: <Review />,
      },
      {
        path: "order",
        element: <Order />,
      },
      {
        path: "my-report",
        element: <Report />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
