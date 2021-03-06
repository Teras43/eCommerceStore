import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PurchasePage = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/");
        }, 3000);
    }, [history]);

    return (
        <PurchasePageWrap>
            <ThankYou>Thanks for your purchase!</ThankYou>
        </PurchasePageWrap>
    );
};

const PurchasePageWrap = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    min-height: calc(100vh - 105px);
`;

const ThankYou = styled.div`
    height: 100%;
    font-weight: 800;
    font-size: 30px;
    margin-top: 80px;
    color: #4863a0;
`;

export default PurchasePage;
