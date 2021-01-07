import React from "react";
import styled from "styled-components";

const Privacy = () => (
    <PrivacyStatement>Keep it secret, keep it safe!</PrivacyStatement>
);

const PrivacyStatement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: calc(100vh - 105px);
    font-size: 25px;
    font-weight: 700;
`;

export default Privacy;
