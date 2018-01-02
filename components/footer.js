import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  position: absolute;
  bottom: 0;
  height: 3em;
  text-decoration: none;
  margin-top: 6em;
`;

const A = styled.a`
  text-decoration: none;
`;

export default () => (
  <Footer>
    <A href="https://timothyjohnk.github.io/tim_code/">
      What in the world is 'Tim Kirchhof'?
    </A>
  </Footer>
);
