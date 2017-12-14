import React, { Component } from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const Intro = styled.div`
  text-align: center;
  font-size: 1.2em;
  margin: 20vh auto 0;
  padding: 0 1em;
  max-width: 600px;
  @media screen and (max-width: 600px) {
    margin: 10vh auto;
    width: 80vw;
  }
`;

export default class Index extends Component {
  render() {
    return (
      <Layout>
        <Intro>
          Calorie calculator utilizing the speed of SSR with Next.js
        </Intro>
      </Layout>
    );
  }
}
