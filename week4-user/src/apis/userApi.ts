import apiClient from "./apiClient";

// 로그인 요청 함수
export const login = async (username: string, password: string) => {
  const response = await apiClient.post("/login", { username, password });
  return response.data.result;
};

// 회원 취미 조회 함수
export const getUserHobby = async () => {
  const response = await apiClient.get("/user/my-hobby");
  return response.data.result.hobby;
};

// 특정 회원의 취미 검색 함수
export const searchHobbyById = async (no: string) => {
  const response = await apiClient.get(`/user/${no}/hobby`);
  return response.data.result.hobby;
};

// 회원 가입 요청 함수
export const signUp = async (username: string, password: string, hobby: string) => {
  const response = await apiClient.post("/user", { username, password, hobby });
  return response.data.result.no;
};

// 회원 정보 업데이트 함수
export const updateUserInfo = async (hobby: string, password: string) => {
  await apiClient.put("/user", { hobby, password });
};
