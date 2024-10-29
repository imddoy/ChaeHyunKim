import members from "./data/members.js";

/* 데이터 생성, 조회,업데이트 */
// 초기 데이터 세팅
if (!localStorage.getItem("members")) {
  localStorage.setItem("members", JSON.stringify(members));
}

// 멤버 데이터를 로컬 스토리지에서 가져오는 함수
const getMembers = () => {
  return JSON.parse(localStorage.getItem("members"));
};

// 멤버 데이터를 로컬 스토리지에 다시 저장하는 함수
const setMembers = (newMembers) => {
  localStorage.setItem("members", JSON.stringify(newMembers));
  renderTable();
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

    clone.querySelector("tr").id = member.id;
    clone.querySelector(".checkbox").onclick = (event) => {
      onclick = checkSelectAll(event.target);
    };

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

/* 데이터 필터링 */
const filterBtn = document.querySelector("#filter-button");
filterBtn.onclick = () => {
  const filterMembers = getMembers().filter(filterData);
  console.log(filterMembers);
  renderTable(filterMembers);
};

// 데이터 필터링 함수
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

// 데이터 필터링 초기화
const clearBtn = document.querySelector("#clear-button");
clearBtn.onclick = () => {
  document.querySelector("#filter-name").value = "";
  document.querySelector("#filter-en-name").value = "";
  document.querySelector("#filter-github").value = "";
  document.querySelector("#filter-gender").value = "";
  document.querySelector("#filter-role").value = "";
  document.querySelector("#filter-first-group").value = "";
  document.querySelector("#filter-second-group").value = "";
};

/* 체크박스 구현 */
// 전체 체크박스 on/off
const allBtn = document.querySelector(".all-button");
allBtn.onclick = () => {
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = allBtn.checked;
  });
};
// 전체 체크박스의 선택 여부를 판단하는 함수
const checkSelectAll = (checkbox) => {
  const checkboxes = document.querySelectorAll(".checkbox");
  if (checkbox.checked === false) {
    allBtn.checked = false;
  } else {
    let checkAllYN = false;
    checkboxes.forEach((checkbox) => {
      checkAllYN = checkbox.checked ? true : false;
    });
    allBtn.checked = checkAllYN ? true : false;
  }
};

/* 데이터 삭제 */
const deleteBtn = document.querySelector("#delete-button");
deleteBtn.onclick = () => {
  const deleteMembers = getMembers().filter(deleteData);
  alert("삭제되었습니다.");
  setMembers(deleteMembers);
};
// 데이터 선택 여부를 판단하는 함수
const deleteData = (data) => {
  const checkboxes = document.querySelectorAll(".checkbox");
  let uncheckedID = [];
  checkboxes.forEach((checkbox) => {
    uncheckedID = checkbox.checked
      ? uncheckedID
      : [...uncheckedID, Number(checkbox.parentElement.parentElement.id)];
  });

  return uncheckedID.includes(data.id);
};

/* 모달 */
const modal = document.querySelector("dialog");
document.querySelector("#add-button").onclick = () => {
  modal.showModal();
};
// 백드롭 클릭 시 모달 닫힘
modal.addEventListener("click", (e) => {
  if (e.target.nodeName === "DIALOG") modal.close();
});

/* 데이터 추가 */
const addBtn = document.querySelector("#confirm-button");
addBtn.onclick = () => {
  const newMember = {
    id: getMembers().length + 1,
    name: document.querySelector("#add-name").value,
    englishName: document.querySelector("#add-en-name").value,
    github: document.querySelector("#add-github").value,
    gender: document.querySelector("#add-gender").value,
    role: document.querySelector("#add-role").value,
    firstWeekGroup: Number(document.querySelector("#add-first-group").value),
    secondWeekGroup: Number(document.querySelector("#add-second-group").value),
  };

  if (isEmpty(newMember)) {
    alert("모든 값을 작성해주세요.");
  } else {
    setMembers([...getMembers(), newMember]);
    alert("추가되었습니다.");
  }
};
// null값 확인
const isEmpty = (object) =>
  !Object.values(object).every((input) => input !== null && input !== "");
