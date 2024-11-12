import Input from "@components/common/input/Input";
import * as S from "./Hobby.style";
import Button from "@components/common/button/Button";
import { useEffect, useState } from "react";
import Spacing from "@components/common/spacing/Spacing";
import { getUserHobby, searchHobbyById } from "@apis/userApi";

const Hobby = () => {
  const [no, setNo] = useState(null);
  const [userHobby, setUserHobby] = useState("");
  const [searchedHobby, setSearchedHobby] = useState("");

  const handleNoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNo(e.target.value);
    setSearchedHobby(null);
  };

  const fetchUserHobby = async () => {
    try {
      const hobby = await getUserHobby();
      setUserHobby(hobby);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        const errorMsg =
          status === 401 && data.code === "00"
            ? "토큰이 없습니다. 다시 로그인하세요."
            : status === 403 && data.code === "00"
            ? "유효하지 않은 토큰입니다."
            : status === 404 && data.code === "00"
            ? "유효하지 않은 경로입니다."
            : "알 수 없는 오류가 발생했습니다.";
        alert(errorMsg);
      } else {
        alert("서버와의 연결에 문제가 발생했습니다.");
      }
    }
  };

  useEffect(() => {
    fetchUserHobby();
  }, []);

  const searchHobby = async () => {
    try {
      const hobby = await searchHobbyById(no);
      setSearchedHobby(hobby);
    } catch (error) {
      const { status, data } = error.response;
      const errorMessage =
        status === 404 && data.code === "00"
          ? "유효하지 않은 경로입니다."
          : status === 404 && data.code === "01"
          ? "존재하지 않는 회원 번호입니다."
          : "알 수 없는 오류가 발생했습니다.";

      alert(errorMessage);
    }
  };
  return (
    <>
      <S.HobbyWrapper>
        <S.Title>나의 취미</S.Title>
        <S.Text>{userHobby}</S.Text>
        <Spacing marginBottom="6" />
        <S.Title>다른 사람들의 취미</S.Title>
        <Input
          value={no}
          type="text"
          placeholder="회원 번호를 입력하세요"
          onChange={handleNoInput}
        />
        <Button text="검색" onClick={searchHobby} />
        {searchedHobby && (
          <S.Text>
            {no}번째 회원님의 취미: {searchedHobby}
          </S.Text>
        )}
      </S.HobbyWrapper>
    </>
  );
};

export default Hobby;
