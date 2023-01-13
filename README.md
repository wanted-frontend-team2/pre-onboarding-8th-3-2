# Searchbar with Recommendation Word

> 검색어 추천 기능을 제공하는 검색창 입니다.

[서비스 바로가기]

<br>

## 사용 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> 
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> 
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/> 
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> 
<img src="https://img.shields.io/badge/Recoil-007AF4?style=flat-square&logo=Recoil&logoColor=fff"/>

<br>

## 설치 및 실행 방법

```javascript
 $ git clone https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2.git
 $ npm i
 $ npm run start
```

- 3000번 포트에서 시작됩니다.

<br>

## 세부 기능

### 코드 상세설명

[1. 검색창 구현](https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2/wiki/1.-%EA%B2%80%EC%83%89%EC%B0%BD-%EA%B5%AC%ED%98%84)  
[2. 검색어 Bold 처리](https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2/wiki/2.-%EA%B2%80%EC%83%89%EC%96%B4-Bold-%EC%B2%98%EB%A6%AC)  
[3. API 호출 최적화](https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2/wiki/3.-API-%ED%98%B8%EC%B6%9C-%EC%B5%9C%EC%A0%81%ED%99%94)  
[4. API local caching](https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2/wiki/4.-API-local-caching)  
[5. 추천 검색어 리스트 키보드 이벤트](https://github.com/wanted-frontend-team2/pre-onboarding-8th-3-2/wiki/5.-%EC%B6%94%EC%B2%9C-%EA%B2%80%EC%83%89%EC%96%B4-%EB%A6%AC%EC%8A%A4%ED%8A%B8-%ED%82%A4%EB%B3%B4%EB%93%9C-%EC%9D%B4%EB%B2%A4%ED%8A%B8)

<br>

### 검색창 구현

[기존 사이트](https://clinicaltrialskorea.com/) 의 검색영역을 클론하여 검색창을 구현하였습니다.  
![](https://user-images.githubusercontent.com/42338190/212318916-1670f7c5-a92f-408f-a734-4dc5613217ce.gif)

- 질환명 검색 시 API를 호출하여 검색어 추천 기능을 구현하였습니다.
- 검색어가 없을 시 api 요청을 보내지 않고 "검색어 없음"을 노출하였습니다.
- tailwind의 peer 속성을 이용하여 검색창을 클릭하면 추천 검색어 창이 뜨도록 처리하였습니다.
- API 연결
  - `axios`를 이용하여 api를 호출한 후 `try-catch`를 이용하여 에러 핸들링을 처리하였습니다.

<br>

### 검색어 bold 처리

사용자가 입력한 텍스트와 일치하는 부분을 bold 처리하였습니다.  
![bold_test](https://user-images.githubusercontent.com/42338190/212320201-e27f8fc6-6c56-49fd-9d45-a74de6be1b8f.gif)

<br>

### 키보드 이벤트

추천 검색어 리스트에서 키보드 방향키로 이동 가능하도록 구현하였습니다.  
![keyboard_test](https://user-images.githubusercontent.com/42338190/212320891-7f7e8112-0a43-4ed4-a979-c9cc60ac66a1.gif)

<br>

### 기타 고려한 항목

- 같은 글자가 한줄에 있는 경우 모두 bold 처리를 하였습니다. ![Jan-13-2023 21-23-11](https://user-images.githubusercontent.com/42338190/212319611-60871084-5e76-4b35-9d94-5df556550399.gif)

<br><br>

## 디렉토리 구조

<details>
    <summary>Repository Overview</summary>

        ┣ 📂 src
          ┣ 📂 components
          ┃ ┣ 📝 RecommendationItem.tsx
          ┃ ┣ 📝 Recommendations.tsx
          ┃ ┣ 📝 Search.tsx
          ┃ ┣ 📝 SearchInput.tsx
          ┃ ┣ 📝 SearchTitle.tsx
          ┃ ┗ 📝 Spinner.tsx
          ┣ 📂 hooks
          ┃ ┣ 📝 useDebounce.ts
          ┃ ┗ 📝 useSelectedIndex.ts
          ┣ 📂 pages
          ┃ ┗ 📝 Home.tsx
          ┣ 📂 types
          ┃  ┗ 📝 index.d.ts
          ┣ 📂 util
          ┃  ┗ 📝 api.ts
          ┣ 📝 App.tsx
          ┣ 📝 index.css
          ┗ 📝 index.tsx

</details>

<br><br>

## 팀원

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/trondi"><img src="https://avatars.githubusercontent.com/u/42338190?v=4" width="100px;" alt="김수경 프로필"/><br /><sub><b>김수경</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/Iandayy"><img src="https://avatars.githubusercontent.com/u/104152583?v=4" width="100px;" alt="박수연 프로필"/><br /><sub><b>박수연</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/ahn0min"><img src="https://avatars.githubusercontent.com/u/89904226?v=4" width="100px;" alt="안영민 프로필"/><br /><sub><b>안영민</b></sub></a><br />팀원<br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/heony704"><img src="https://avatars.githubusercontent.com/u/36994104?v=4" width="100px;" alt="이승헌 프로필"/><br /><sub><b>이승헌</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/Jooseulgi"><img src="https://avatars.githubusercontent.com/u/54945205?v=4" width="100px;" alt="주슬기 프로필"/><br /><sub><b>주슬기</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/dukjjang"><img src="https://avatars.githubusercontent.com/u/102455275?v=4" width="100px;" alt="진현덕 프로필"/><br /><sub><b>진현덕</b></sub></a><br />팀원<br /></td>
      <td align="center"><a href="https://github.com/cofla159"><img src="https://avatars.githubusercontent.com/u/70076564?v=4" width="100px;" alt="황채림 프로필"/><br /><sub><b>황채림</b></sub></a><br />팀장<br /></td>
    </tr>
  </tbody>
</table>
