import Button from "@components/common/button/Button";
import Input from "@components/common/input/Input";
import { useState } from "react";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Input value={id} type="text" placeholder="아이디" onChange={handleIdInput} />
      <Input
        value={password}
        type="password"
        placeholder="비밀번호"
        onChange={handlePasswordInput}
      />
      <Button text="제출" />
    </>
  );
};

export default Login;
