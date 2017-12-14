import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Anchor from './anchor';
import Footer from './footer';
import { Calc } from '../pages/calculator';

const Wrapper = styled.div`
  height: 100%;
  color: black;
`;

const Header = styled.header`
  background-color: lightblue;
  padding: 1em 0em;
  display: flex;
  font-size: 1.5;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 0.8em;
    flex-direction: column;
    text-align: center;
  }
`;

const TitleComponent = styled.div`
  font-size: 2.9em;
`;

const LINKS = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Calculator',
    href: '/calculator'
  }
];

export default ({ children, page }) => {
  return (
    <Wrapper>
      <Header>
        <TitleComponent>Calorie Calculator</TitleComponent>
        {LINKS.map(({ href, name }) => (
          <Link href={href} key={name} passHref prefetch>
            <Anchor>{name}</Anchor>
          </Link>
        ))}
      </Header>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};
