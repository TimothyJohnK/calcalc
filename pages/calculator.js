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
const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;
const ButtonSpan = styled.span`
  flex: 1;
  width: 80px;
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
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({
      exercise: '',
      incline: '',
      duration: ''
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      exercise: '',
      incline: '',
      duration: ''
    });
  }

  render() {
    return (
      <CalcForm>
        <label>Exercise</label>
        <input
          name="exercise"
          placeholder="Exercise"
          value={this.state.exercise}
          onChange={this.handleChange.bind(this)}
        />
        <label>Incline</label>
        <input
          name="incline"
          placeholder="Incline"
          value={this.state.incline}
          onChange={this.handleChange.bind(this)}
        />
        <label>Duration </label>
        <input
          name="duration"
          placeholder="Duration"
          value={this.state.duration}
          onChange={this.handleChange.bind(this)}
        />
        <ButtonDiv>
          <ButtonSpan>
            <button onClick={this.handleClear.bind(this)}>Clear</button>
          </ButtonSpan>
          <ButtonSpan>
            <button onClick={this.handleSubmit.bind(this)}>Submit</button>
          </ButtonSpan>
        </ButtonDiv>
      </CalcForm>
    );
  }
}

export default () => (
  <Layout>
    <Calculator />
  </Layout>
);
