import Hobby from "@pages/Hobby";
import MyInfo from "@pages/MyInfo";
import { redirect } from "react-router-dom";

const requireAuth = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    alert("로그인 후 이용하세요.");
    return redirect("/login");
  }
  return null;
};

const MYPAGE_ROUTES = [
  { index: true, element: <Hobby />, loader: requireAuth },
  { path: "info", element: <MyInfo />, loader: requireAuth },
  { path: "hobby", element: <Hobby />, loader: requireAuth },
];

export default MYPAGE_ROUTES;
