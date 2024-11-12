import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToMyPageTab = (tab) => {
    navigate(`/mypage/${tab}`);
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return { goToLogin, goToMyPageTab, goToSignUp };
};

export default useNavigation;
