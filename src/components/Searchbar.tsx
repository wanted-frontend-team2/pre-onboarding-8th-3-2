import { useState } from "react";
import "./Searchbar.css";

function Searchbar(props: { searchItems: any }) {
  // eslint-disable-next-line react/destructuring-assignment
  const products = props.searchItems;

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const shouldDisplayButton = searchValue.length > 0;

  const handleInputClear = () => {
    setSearchValue("");
  };

  const filteredProducts = products.filter((product: string | string[]) =>
    product.includes(searchValue)
  );

  return (
    <div className="wrap">
      <div className="search">
        <div className="searchbar">
          <input
            type="text"
            value={searchValue}
            placeholder="search value"
            onChange={handleInputChange}
            className="searchInput"
          />
        </div>

        <div className="searchBox-clearWrapper">
          {shouldDisplayButton && (
            <button type="button" onClick={handleInputClear} className="clear">
              clear
            </button>
          )}
        </div>
        <div className="searchBox-searchButton">
          <button className="searchButton" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
      <div className="searchResult">
        <ul>
          {searchValue &&
            filteredProducts.map((product: any) => (
              <li key={product}>{product}</li>
            ))}
          {searchValue && !filteredProducts ? "검색 결과가 없습니다." : ""}
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
