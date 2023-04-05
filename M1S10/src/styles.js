import styled from "styled-components";

export const SCHeader = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
export const SCBtn = styled.button`
  font-size: 0.9em;
  padding: 0.5em;
  border-radius: 5px;
  border: solid 1px #ccc;
  box-shadow: rgba(232, 175, 5, 0.5) 1px 1px 1px 1px;
  margin-right: 15px;
`;

export const SCContainerFormulario = styled.div`
  max-width: 598px;
  height: auto;
  margin: 0 auto;
  background-color: #fff;
  padding: 1.5rem;
  border: solid 1px #ccc;
  box-shadow: rgba(232, 175, 5, 0.5) 1px 10px 15px 1px;

  form {
    max-width: 450px;
    margin: 0 auto;
  }

  .acoes {
    margin-top: 2rem;
  }
`;
