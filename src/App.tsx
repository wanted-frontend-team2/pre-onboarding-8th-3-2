import { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";

function App() {
  const [searchItems, setSearchItems] = useState([]);

  useEffect(() => {
    console.log("useEffect in App.js called");
    console.log(
      fetch("http://localhost:4000/sick")
        .then((res) => res.json())
        .then((productArray) => {
          console.log(productArray);
          // eslint-disable-next-line @typescript-eslint/no-shadow
          const searchItems = productArray.map(
            (product: { sickNm: any }) => product.sickNm
          );
          setSearchItems(searchItems);
        })
    );
  }, []);

  return (
    <div className="App">
      {searchItems.length > 0 ? (
        <Searchbar searchItems={searchItems} />
      ) : (
        "Loading.."
      )}
    </div>
  );
}

export default App;
