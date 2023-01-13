import Search from '../components/Search';
import Title from '../components/SearchTitle';

function Home() {
  return (
    <main className="flex justify-center w-screen h-screen bg-sky-100">
      <div className="w-[500px] pt-20">
        <Title />
        <Search />
      </div>
    </main>
  );
}

export default Home;
