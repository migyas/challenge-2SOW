import styled from 'styled-components';
import { Form as Unform } from 'semantic-ui-react';

export const Form = styled(Unform)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 600;
    font-size: 2.8rem;
    line-height: 36px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 48px;
    align-self: flex-end;
  }
  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    .text {
      padding: 16px 24px;
    }
  }
`;
