import styled from 'styled-components';

export const Form = styled.form`
  input {
    padding: 5px;
    font-weight: 500;
    font-size: 14px;

    &:focus {
      box-shadow: 2px 2px 5px indianred;
      transition: 250ms;
    }
  }

  button {
    align-items: center;
    margin-left: 5px;
    padding: 2px 5px;
    height: 28px;
    font-size: 14px;
    color: white;
    background: linear-gradient(0deg, lightcoral 0%, Crimson 100%);
    border: 1px solid #9246ad;
    border-radius: 2px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
      scale: 1.1;
      transition: 250ms;
    }
  }
`;
