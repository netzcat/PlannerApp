import React from "react";
import styled from "styled-components";

import PlannerCard from "./PlannerCard";

const PlannerList = ({title}) => {
    return(
        <ListContainer>
            <h4>{title}</h4>
            <PlannerCard />
        </ListContainer>
    );
};

const ListContainer = styled.div`
    background-color: #ccc;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
`;

export default PlannerList;