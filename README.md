# 임상시험 검색창

검색창에 질환을 입력하면 추천 검색어를 표시해주는 웹 어플리케이션입니다.

## 기능

- 질환명 검색 시 API 호출 통해서 추천 검색어 표시

  - 사용자가 입력한 텍스트와 일치하는 부분 볼드 처리
  - 검색어 없을 시 "검색어 없음" 표출

- API 호출 최적화

  - 모든 이벤트에 API 호출하지 않도록 구현

- 키보드만으로 추천 검색어들로 이동 가능

## 기술 스택

- Language: `TypeScript`
- Style: `tailwindCSS`

## 코드 구조

```
src
 ┣ components
 ┃ ┣ util
 ┃ ┃ ┣ SearchBar.tsx
 ┃ ┃ ┗ SuggestedSearchWord.tsx
 ┃ ┗ DiseaseSearch.tsx
 ┣ hooks
 ┃ ┣ useDebounce.ts
 ┃ ┣ useFetch.ts
 ┃ ┗ useModalState.ts
 ┣ pages
 ┃ ┗ SearchPage.tsx
 ┣ App.tsx
 ┣ index.css
 ┗ index.tsx
```

## 설치 및 실행 방법

1. 로컬 서버 실행하기

로컬 환경에서 API 서버를 실행하기 위해서 [API 서버 레포지토리](https://github.com/walking-sunset/assignment-api_8th)를 복제합니다.

```bash
git clone https://github.com/walking-sunset/assignment-api_8th.git
```

클론한 폴더에 들어가 서버를 실행합니다.

```bash
npm install
npm start
```

2. 프로젝트 실행하기

위와 같이 해당 레포지토리를 복제하고 실행합니다.

```bash
git clone https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2.git
```

```bash
npm install
npm start
```
