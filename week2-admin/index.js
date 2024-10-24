// 초기 데이터 가져오기
import members from "./data/members.js";

// 초기 데이터 세팅
if (!localStorage.getItem("members")) {
  localStorage.setItem("members", JSON.stringify(members));
}

// 멤버 데이터를 로컬 스토리지에서 가져오는 함수
const getMembers = () => {
  return JSON.parse(localStorage.getItem("members"));
};

// 테이블 렌더링하는 함수
const renderTable = (filterMembers) => {
  const nowMembers = filterMembers || getMembers();

  // 테이블 초기화
  const tableBody = document.querySelector("tbody");
  tableBody.textContent = "";

  // DocumentFragment 생성
  const fragment = document.createDocumentFragment();

  // 템플릿 가져오기
  const template = document.querySelector("#row-template");

  // 데이터가 없으면 아무것도 추가하지 않음
  if (nowMembers.length === 0) {
    tableBody.textContent = "데이터가 없습니다";
    return;
  }

  // 데이터 순회하며 행 생성 및 추가
  nowMembers.forEach((member) => {
    // template에서 복제된 내용 가져오기
    const clone = template.content.cloneNode(true);

    // 복제된 행의 각 셀에 데이터 채우기
    clone.querySelector(".name").textContent = member.name;
    clone.querySelector(".english-name").textContent = member.englishName;
    clone.querySelector(".github").textContent = member.github;
    clone.querySelector(".github").href = `https://github.com/${member.github}`;
    clone.querySelector(".github").target = "_blank";
    clone.querySelector(".gender").textContent =
      member.gender === "male" ? "남자" : "여자";
    clone.querySelector(".role").textContent = member.role;
    clone.querySelector(".first-week-group").textContent =
      member.firstWeekGroup;
    clone.querySelector(".second-week-group").textContent =
      member.secondWeekGroup;

    // DocumentFragment에 행 추가
    fragment.appendChild(clone);
  });

  // 테이블에 DocumentFragment 추가
  tableBody.appendChild(fragment);
};

// 페이지가 로드될 때 테이블 렌더링
renderTable();

// 데이터 필터링
const filterBtn = document.querySelector("#filter-button");
filterBtn.onclick = () => {
  const filterMembers = getMembers().filter(filterData);
  console.log(filterMembers);
  renderTable(filterMembers);
};

const filterData = (data) => {
  const filterName = document.querySelector("#filter-name").value;
  const filterEnName = document.querySelector("#filter-en-name").value;
  const filterGithub = document.querySelector("#filter-github").value;
  const filterGender = document.querySelector("#filter-gender").value;
  const filterRole = document.querySelector("#filter-role").value;
  const filterFirstGroup = document.querySelector("#filter-first-group").value;
  const filterSecondGroup = document.querySelector(
    "#filter-second-group"
  ).value;

  return (
    (filterName === "" || data.name.includes(filterName)) &&
    (filterEnName === "" || data.englishName.includes(filterEnName)) &&
    (filterGithub === "" || data.github.includes(filterGithub)) &&
    (filterGender === "" || data.gender === filterGender) &&
    (filterRole === "" || data.role === filterRole) &&
    (filterFirstGroup === "" ||
      data.firstWeekGroup.toString() === filterFirstGroup) &&
    (filterSecondGroup === "" ||
      data.secondWeekGroup.toString() === filterSecondGroup)
  );
};

// 필터링 초기화
const ClearBtn = document.querySelector("#clear-button");
ClearBtn.onclick = () => {
  document.querySelector("#filter-name").value = "";
  document.querySelector("#filter-en-name").value = "";
  document.querySelector("#filter-github").value = "";
  document.querySelector("#filter-gender").value = "";
  document.querySelector("#filter-role").value = "";
  document.querySelector("#filter-first-group").value = "";
  document.querySelector("#filter-second-group").value = "";
};
