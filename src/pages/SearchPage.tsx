import DiseaseSearch from "../components/DiseaseSearch";

export default function SearchPage() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#CAE9FF] overflow-y-scroll">
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center w-full max-w-2xl sm:px-16 px-10">
          <h1 className="flex sm:mb-9 mb-6 text-center font-bold sm:text-3xl text-lg leading-relaxed">
            국내 모든 임상시험 검색하고
            <br />
            온라인으로 참여하기
          </h1>
          <DiseaseSearch />
        </div>
      </div>
    </div>
  );
}
