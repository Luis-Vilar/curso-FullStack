import styled from "styled-components";

export const SCPassosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.9rem;
`;

export const SCPasso = styled.span`
    color: ${props => `${props.ativo ? '#f01db0' : '#868584'}`};
    font-weight: ${props => `${props.ativo ? 'bold' : 'regular'}`};
`;