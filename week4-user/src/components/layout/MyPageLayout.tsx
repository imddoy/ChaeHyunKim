import MyPageHeader from "@components/header/MyPageHeader";
import { Outlet } from "react-router-dom";

const MyPageLayout = () => {
  return (
    <>
      <MyPageHeader />
      <Outlet />
    </>
  );
};

export default MyPageLayout;
