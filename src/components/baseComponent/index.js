import React from 'react';
import { BaseContainer, Header, Main, Footer } from './baseElements';

const BaseComponent = ({ children }) => {
  return (
    <BaseContainer>
      <Header>
        <h1>Media Library</h1>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© 2023 Media Library</p>
      </Footer>
    </BaseContainer>
  );
};

export default BaseComponent;
