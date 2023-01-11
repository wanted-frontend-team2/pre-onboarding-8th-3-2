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
    <div className="searchBar">
      <input
        type="text"
        value={searchValue}
        placeholder="search value"
        onChange={handleInputChange}
      />
      {shouldDisplayButton && (
        <button type="button" onClick={handleInputClear}>
          clear
        </button>
      )}
      <ul>
        {filteredProducts.map((product: any) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searchbar;
