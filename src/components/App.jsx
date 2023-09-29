import React from 'react';
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
const { Component } = require('react');

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  vote = event => {
    const id = event.currentTarget.id;
    switch (id) {
      case 'good':
        this.setState({ good: this.state.good + 1 });
        break;
      case 'neutral':
        this.setState({ neutral: this.state.neutral + 1 });
        break;
      case 'bad':
        this.setState({ bad: this.state.bad + 1 });
        break;
      default:
        console.log(id + ' param is not in the state');
    }
  };

  render() {
    return (
      <div
        style={{
          width:'400px',
          marginLeft:"auto",
          marginRight:"auto",
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Section title={'Please leave feedback'}/>
        <FeedbackOptions option={Object.keys(this.state)} vote={this.vote} />
      </div>
    );
  }
}
export default App;
