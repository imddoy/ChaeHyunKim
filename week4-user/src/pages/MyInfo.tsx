import Input from "@components/common/input/Input";
import * as S from "./Hobby.style";
import Button from "@components/common/button/Button";
import { useEffect, useState } from "react";
import Spacing from "@components/common/spacing/Spacing";
import { validateUpdateInput } from "@utils/handleInput";
import { updateUserInfo } from "@apis/userApi";

const MyInfo = () => {
  const [hobby, setHobby] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const handleValidation = () => {
    const fields = { hobby, password };
    const { isValid, errors: validationErrors } = validateUpdateInput(fields);
    setErrors(validationErrors);
    return isValid;
  };

  useEffect(() => {
    handleValidation();
  }, [hobby, password]);

  const updateInfo = async () => {
    const token = localStorage.getItem("user");
    if (!token) {
      alert("로그인 토큰이 없습니다.");
      return;
    }

    try {
      await updateUserInfo(hobby, password);
      alert("변경되었습니다.");
      if (hobby) {
        setHobby("");
      }
      if (password) {
        setPassword("");
      }
    } catch (error) {
      const { status, data } = error.response || {};
      const errorMessage =
        status === 400 && data.code === "00"
          ? "취미 혹은 비밀번호가 길이가 8자를 넘깁니다."
          : status === 401 && data.code === "00"
          ? "로그인 토큰이 없습니다."
          : status === 403 && data.code === "00"
          ? "유효하지 않은 토큰입니다."
          : status === 404 && data.code === "00"
          ? "유효하지 않은 경로입니다."
          : "알 수 없는 오류가 발생했습니다.";

      alert(errorMessage);
    }
  };
  return (
    <>
      <S.HobbyWrapper>
        <S.Title>새 비밀번호</S.Title>
        <Input
          value={password}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handleInputChange(setPassword)}
          message={errors.password}
        />{" "}
        <Spacing marginBottom="0.1" />
        <S.Title>새 취미</S.Title>
        <Input
          value={hobby}
          type="text"
          placeholder="취미를 입력하세요"
          onChange={handleInputChange(setHobby)}
          message={errors.hobby}
        />
        <Button
          text="확인"
          onClick={updateInfo}
          disabled={!!errors.password || !!errors.hobby || (!password && !hobby)}
        />
      </S.HobbyWrapper>
    </>
  );
};

export default MyInfo;
