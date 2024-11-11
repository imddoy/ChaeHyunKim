import Hobby from "@pages/Hobby";
import MyInfo from "@pages/MyInfo";

const MYPAGE_ROUTES = [
  { index: true, element: <Hobby /> },
  { path: "info", element: <MyInfo /> },
  { path: "hobby", element: <Hobby /> },
];

export default MYPAGE_ROUTES;
