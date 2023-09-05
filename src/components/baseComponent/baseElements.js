import styled from 'styled-components';

export const BaseContainer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 10px 0;
  text-align: center;
`;

export const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

export const Footer = styled.footer`
  background-color: #222;
  color: white;
  padding: 10px 0;
  text-align: center;
`;
