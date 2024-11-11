export const validateSignupInput = (step: number, fields: { [key: string]: string }, touched) => {
  const errors: { [key: string]: string } = {};
  let isValid = true;

  const fieldNames = {
    username: "이름",
    password: "비밀번호",
    checkPassword: "비밀번호 확인",
    hobby: "취미",
  };

  for (const [field, value] of Object.entries(fields)) {
    if (!value) {
      if (touched[field]) {
        errors[field] = `${fieldNames[field]}이(가) 비어 있습니다.`;
      }
      isValid = false;
    } else if (value.length > 8) {
      errors[field] = `${fieldNames[field]}은(는) 8글자를 넘을 수 없습니다.`;
      isValid = false;
    }
  }

  if (step === 2 && fields.password !== fields.checkPassword) {
    errors.checkPassword = "비밀번호가 서로 일치하지 않습니다.";
    isValid = false;
  }
  return { isValid, errors };
};

export const validateUpdateInput = (fields: { [key: string]: string }) => {
  const errors: { [key: string]: string } = {};
  let isValid = true;

  const fieldNames = {
    password: "비밀번호",
    hobby: "취미",
  };

  for (const [field, value] of Object.entries(fields)) {
    if (value.length > 8) {
      errors[field] = `${fieldNames[field]}은(는) 8글자를 넘을 수 없습니다.`;
      isValid = false;
    }
  }

  return { isValid, errors };
};
