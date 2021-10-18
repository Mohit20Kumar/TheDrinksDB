import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const searchValue = React.useRef("");
  const { setSearchTerm } = useGlobalContext();
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label style={{ color: "black", opacity: "0.9" }} htmlFor="name">
            Search Your Fav Drink
          </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
