import React from "react";
import styled from "styled-components";

const SearchAndCategory = ({ productData }) => {
    let categoryArray = [];

    productData.map((product) => {
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
            <SearchInput placeholder="Search for items!" />
            <SelectMenu>
                <option value="allItems">All Items</option>
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
    height: 35px;
    font-size: 20px;
`;

const SelectMenu = styled.select`
    width: 50%;
    font-size: 20px;
`;

export default SearchAndCategory;
