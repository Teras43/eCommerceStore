import React from "react";
import store from "../store";
import styled from "styled-components";

const DeleteCartItem = ({ productName, onComplete }) => {
    return (
        <RemoveButton
            onClick={() => {
                store.dispatch({
                    type: "REMOVE_FROM_CART",
                    data: {
                        productName,
                    },
                });
                onComplete?.();
            }}
        >
            Remove
        </RemoveButton>
    );
};

const RemoveButton = styled.button`
    width: 70px;
    height: 25px;
    background-color: #4863a0;
    color: white;
    border-radius: 10px;
    font-size: 15px;
    margin-bottom: 20px;
    margin-left: 53px;
    outline: none;
`;

export default DeleteCartItem;
