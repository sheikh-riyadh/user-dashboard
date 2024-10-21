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
import AddProduct from "../pages/AddProduct/AddProduct";
import PersonalInformation from "../pages/Business/PersonalInformation";
import BusinessInformation from "../pages/Business/BusinessInformation";
import BannerInformation from "../pages/Business/BannerInformation";

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
        path: "my-cart",
        element: <Cart />,
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
        path: "order",
        element: <Order />,
      },
      {
        path: "my-reviews",
        element: <Review />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "personal-info",
        element: <PersonalInformation />,
      },
      {
        path: "business-info",
        element: <BusinessInformation />,
      },
      {
        path: "banner-info",
        element: <BannerInformation/>,
      },
    ],
  },
]);

export default router;
