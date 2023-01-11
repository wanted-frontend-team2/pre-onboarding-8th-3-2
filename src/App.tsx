import { lazy } from "react";

const Layout = lazy(() => import("./components/Layout"));
const SearchBar = lazy(() => import("./components/SearchBar"));

function App() {
  return (
    <Layout>
      <SearchBar />
    </Layout>
  );
}

export default App;
