import React, { Component } from 'react';
import { Container } from './container';

import { Button } from './button';
import { Title } from './title';
import { Notification } from './notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['good', 'neutral', 'bad'];

  countStats = option => {
    this.setState(prev => {
      return { [option]: prev[option] + 1 };
    });
  };
  countTotalFeedback = options => {
    return options.reduce((acc, option) => {
      return (acc += this.state[option]);
    }, 0);
  };

  countPositiveFeedbackPercentage = total => {
    return (this.state.good && (this.state.good / total) * 100).toFixed(0);
  };

  render() {
    const total = this.countTotalFeedback(this.options);

    return (
      <Container>
        <Title text="Please, leave feedback" />
        {this.options.map(option => (
          <Button
            text={option}
            key={option}
            handleClick={() => this.countStats(option)}
          />
        ))}
        <Title text="Statistics" />
        {this.countTotalFeedback(this.options) ? (
          <div>
            {this.options.map(option => (
              <p key={option}>
                {option}: {this.state[option]}
              </p>
            ))}
            Total: {total}
            <br />
            Positive feedback: {this.countPositiveFeedbackPercentage(total)}%
          </div>
        ) : (
          <Notification title="There is no feedback" />
        )}
      </Container>
    );
  }
}

export { App };
