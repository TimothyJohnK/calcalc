import React, { Component } from 'react';
import styled from 'styled-components';

const Anchor = styled.a`
  text-decoration: none;
  font-size: 1.5em;
  flex: 0;
  :active,
  :focus,
  :visited {
    text-decoration: none;
    color: inherit;
  }
`;

export default ({ children, href }) => <Anchor href={href}>{children}</Anchor>;
