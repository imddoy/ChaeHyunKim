import Input from "@components/common/input/Input";
import { useState } from "react";

const Login = () => {
  const [text, setText] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  console.log(text);
  return (
    <>
      <Input value={text} type="text" placeholder="입력해주세요" onChange={handleInput} />
    </>
  );
};

export default Login;
