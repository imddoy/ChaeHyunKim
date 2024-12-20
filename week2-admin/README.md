## 💡 기본 과제

- [x] 바닐라 JavaScript 사용. (React 등 라이브러리 사용 X)

1. **데이터**

   - [x] 초기 데이터는 데이터 파일을 별도로 생성해서 저장
   - [x] 이 데이터를 불러와서 localStorage에 저장(이미 localStorage에 값이 있으면 안 불러옴).
   - [x] localStorage 데이터를 이용해서 테이블을 렌더링(HTML에 데이터를 직접 넣는 하드코딩 x)

2. **헤더**

   - [x] 왼쪽엔 아이콘 1개 (종류는 상관 x)
   - [x] 가운데에는 타이틀(아무거나)
   - [x] 오른쪽에는 긴 컨텐츠(텍스트, 아이콘 등 아무거나)
   - [x] **좌측/우측 컨텐츠의 길이가 달라도 헤더가 정확히 3등분 되어 정렬되어야 함.**

3. **필터**

   - [x] 7개의 검색필터, 2개의 버튼으로 구성
   - [x] 검색필터를 배치할때는 반드시 display: grid 속성 사용
   - [x] 속성이 4줄에 각각 1개, 1개, 3개, 2개 배치 되어야 함(속성의 내용은 상관 x)
   - [x] 필터링 할 값을 input에 입력
         (**기본과제**에서는 7개 모두 input으로 구현해도 괜찮음)
   - [x] 7개의 속성 모두 필터링이 동작해야 함(포함하는 값으로 필터링)
   - [x] **(기본)** 1번에 1개씩 입력하고 검색 필터 적용

4. **표**

   - [x] 우측 상단에는 `선택삭제`, `추가` 버튼이 위치
   - [x] 상단 필터에서 필터링 된 값만 나타남
   - [x] 반드시 HTML의 table 태그를 사용해서 구현
   - [x] 체크박스 기능
   - [x] `선택삭제` 버튼 클릭 시, 체크된 항목들 삭제
   - [x] `추가` 버튼 클릭 시, 항목 추가 모달 등장

5. **모달**

   - [x] 필터링, 테이블에 사용되는 7개의 항목을 입력 가능
   - [x] 우측 상단에 모달 `닫기` 버튼
   - [x] 하단에 `추가` 버튼 클릭 시, 모달 닫히면 데이터 추가
   - [x] 1개라도 비어있는 상태로 추가 시, alert 창 띄워주기

---

## 🔥 심화 과제

1. **필터**

   - [x] 필터에 dropdown을 1개 이상 사용
   - [x] 초기화 버튼을 누르면 모든 필드가 비워짐
   - [x] **(심화)** 여러 조건들을 모두 만족하도록(and) 검색 필터 적용

2. **표**

   - [x] 한 개 이상의 열에는, 눌렀을 때 해당 칸의 값을 이용해서 링크 이동
   - [x] 전체 체크박스 기능 (전체가 체크되면 맨위 체크박스도 자동으로 체크, 하나라도 해제되면 같이 해제)

3. **모달**

   - [x] 백드롭(모달 주변 어두운 배경 부분) 클릭 시 모달 닫힘
