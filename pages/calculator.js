import React, { Component } from 'react';
import Layout from '../components/layout';
import styled, { css } from 'styled-components';

const CALCDIV = styled.div`
  text-align: center;
  font-size: 1.2em;
  margin: 20vh auto 0;
  padding: 0 1em;
  max-width: 600px;
  border: 1px solid black;
  padding: 2em;
  @media screen and (max-width: 600px) {
    margin: 10vh auto;
    width: 80vw;
  }
`;
const Button = styled.button`
  width: 60px;
`;

const CALC_ELEMENTS = [
  {
    name: 'Activity'
  },
  {
    name: 'Incline'
  },
  {
    name: 'Duration'
  }
];
// use CSS grid to implement a layout of objects from CALC_ELEMENTS

export default () => (
  <Layout>
    <CALCDIV>
      {CALC_ELEMENTS.map(({ name }) => (
        <div key={name}>
          {name}:
          <input type="text" name={name} value="" />
          <br />
        </div>
      ))}
      <Button>Enter </Button>
    </CALCDIV>
  </Layout>
);
