// 초기 데이터 가져오기
import members from "./data/members.js";

// 초기 데이터 세팅
if (!localStorage.getItem("members")) {
  localStorage.setItem("members", JSON.stringify(members));
}

const nowMembers = JSON.parse(localStorage.getItem("members"));

// 테이블 본문 가져오기
const tableBody = document.querySelector("tbody");

// DocumentFragment 생성
const fragment = document.createDocumentFragment();

// 템플릿 가져오기
const template = document.querySelector("#row-template");

// 데이터 순회하며 행 생성 및 추가
nowMembers.forEach((member) => {
  // template에서 복제된 내용 가져오기
  const clone = template.content.cloneNode(true);

  // 복제된 행의 각 셀에 데이터 채우기
  clone.querySelector(".name").textContent = member.name;
  clone.querySelector(".english-name").textContent = member.englishName;
  clone.querySelector(".github").textContent = member.github;
  clone.querySelector(".gender").textContent =
    member.gender === "male" ? "남자" : "여자";
  clone.querySelector(".role").textContent = member.role;
  clone.querySelector(".first-week-group").textContent = member.firstWeekGroup;
  clone.querySelector(".second-week-group").textContent =
    member.secondWeekGroup;

  // DocumentFragment에 행 추가
  fragment.appendChild(clone);
});

// 테이블에 DocumentFragment 추가
tableBody.appendChild(fragment);
