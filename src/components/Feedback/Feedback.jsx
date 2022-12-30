
import React from 'react';
import css from './Feedback.module.css'
import Statistics from 'components/Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleOnClick = e => {
    return this.setState(prevState => ({
      ...prevState,
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <h1 className={css.title}>Please leave feedback</h1>
        <div onClick={this.handleOnClick}>
          <button type="button" name="good" className={css.button}>
            Good
          </button>
          <button type="button" name="neutral" className={css.button}>
            Neutral
          </button>
          <button type="button" name="bad" className={css.button}>
            Bad
          </button>
        </div>
        <Statistics state={this.state} />
      </>
    );
  }
}


export default Feedback;

