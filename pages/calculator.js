import React, { Component } from 'react';
import Layout from '../components/layout';
import styled, { css } from 'styled-components';

const CalcForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  margin: 20vh auto 0;
  padding: 0 1em;
  max-width: 600px;
  border: 1px solid black;
  padding: 2em;
  @media screen and (max-width: 600px) {
    margin: auto;
    margin: 10vh auto;
    max-width: 318px;
  }
`;

const ButtonSpan = styled.span`
  display: flex;
  flex: 1;
  width: 60px;
  height: 44px;
  margin: 0 auto;
  align-items: center;
`;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: '',
      incline: '',
      duration: ''
    };

    const change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    const onSubmit = e => {
      e.preventDefault();
      console.log(this.state);
    };
  }

  render() {
    return (
      <CalcForm>
        <input
          name="exercise"
          placeholder="Exercise"
          value={this.state.exercise}
          onChange={this.change}
        />
        <input
          name="incline"
          placeholder="Incline"
          value={this.state.incline}
          onChange={() => this.change}
        />
        <input
          name="duration"
          placeholder="Duration"
          value={this.state.duration}
          onChange={this.change}
        />

        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </CalcForm>
    );
  }
}

export default () => (
  <Layout>
    <Calculator />
  </Layout>
);
