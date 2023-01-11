import { PropsType } from "../types/index";

function Layout({ children }: PropsType) {
  return (
    <main className="flex flex-col items-center w-screen h-screen bg-[#bde0fe]">
      <h1 className="flex flex-col items-center m-10 text-2xl font-semibold">
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </h1>
      {children}
    </main>
  );
}

export default Layout;
