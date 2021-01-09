import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchAndCategory = ({ productData, setSearchIt, onFilter }) => {
    let categoryArray = [];

    const [inputState, setInputState] = useState("");

    const selectCategory = (event) => {
        setSearchIt({
            searchItVal: event.target.value,
        });
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

    const editSearch = (event) => {
        setInputState(event.target.value);
    };

    useEffect(() => {
        if (inputState !== "") {
            const filteredProducts = productData.filter((product) =>
                product.title.toLowerCase().includes(inputState.toLowerCase())
            );
            onFilter(filteredProducts);
        } else {
            onFilter(undefined);
        }
    }, [inputState, onFilter, productData]);

    return (
        <SearchBarAndCategoryContainer>
            <SearchInput
                placeholder="Search for items!"
                value={inputState.searchTerm}
                onChange={editSearch}
            />
            <SelectMenu onChange={selectCategory}>
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
    height: 25px;
`;

const SelectMenu = styled.select`
    width: 50%;
    display: flex;
    justify-content: space-around;
`;

export default SearchAndCategory;
