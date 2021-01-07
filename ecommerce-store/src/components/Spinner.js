import React from "react";
import styled from "styled-components";

const Spinner = () => {
    return (
        <LoadingDiv>
            <LoadSpinner></LoadSpinner>
        </LoadingDiv>
    );
};

const LoadingDiv = styled.div`
    display: flex;
    min-height: calc(100vh - 105px);
`;

const LoadSpinner = styled.div`
    @keyframes spinner {
        0% {
            transform: translate3d(-50%, -50%, 0) rotate(0deg);
        }
        100% {
            transform: translate3d(-50%, -50%, 0) rotate(360deg);
        }
    }
    &:before {
        animation: 1.5s linear infinite spinner;
        animation-play-state: inherit;
        border: solid 12px #cfd0d1;
        border-bottom-color: #049287;
        border-radius: 50%;
        content: "";
        height: 110px;
        width: 110px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        will-change: transform;
    }
`;

export default Spinner;
