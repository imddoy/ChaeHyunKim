import Layout from "@components/layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import MYPAGE_ROUTES from "./MyPageRoutes";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import MyPageLayout from "@components/layout/MyPageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },
  {
    path: "/mypage",
    element: <MyPageLayout />,
    children: [...MYPAGE_ROUTES],
  },
]);

export default router;
