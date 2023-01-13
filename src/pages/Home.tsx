import Search from '../components/Search';
import Title from '../components/SearchTitle';

function Home() {
  return (
    <main className="fixed bg-sky-100 w-full h-full">
      <Title />
      <Search />
    </main>
  );
}

export default Home;
