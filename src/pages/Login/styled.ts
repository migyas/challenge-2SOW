import styled from 'styled-components';

import login from '../../assets/login-img.jpg';

export const Container = styled.div`
  background-image: url(${login});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
