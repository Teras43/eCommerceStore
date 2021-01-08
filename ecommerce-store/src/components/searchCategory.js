import React from "react";
import styled from "styled-components";

const SearchAndCategory = ({ productData, setSearchIt }) => {
  let categoryArray = [];

    const selectCategory = (event) => {
    setSearchIt({
      searchItVal: event.target.value,
    })
  };

  productData.forEach((product) => {
    if (!categoryArray.includes(product.category)) {
      categoryArray.push(product.category);
    }

    return categoryArray;
  });

  let dropDownValue = categoryArray.map((category, index) => {
    return (
      <option key={index} value={category}>
        {category}
      </option>
    );
  });

  return (
    <SearchBarAndCategoryContainer>
      <SearchInput placeholder="Search for items!"onChange={selectCategory} />
      <SelectMenu value="value" onChange={selectCategory}>
        <option value="value">All Items</option>
        {dropDownValue}
      </SelectMenu>
    </SearchBarAndCategoryContainer>
  );
};

/** Styles */
const SearchBarAndCategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SearchInput = styled.input`
  width: 50%;
  height: 25px;
`;

const SelectMenu = styled.select`
  width: 50%;
    display: flex;
    justify-content: space-around;
`;

const SearchBar = styled.input`
    width: 50%;
    height: 35px;
    font-size: 20px;
`;


export default SearchAndCategory;
