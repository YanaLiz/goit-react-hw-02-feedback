import React from 'react';
import PropTypes from 'prop-types'



const Statistics = ({ good, neutral, bad }) => {
  let countTotalFeedback = good + neutral + bad;
  let positiveFeedback = ((good / countTotalFeedback) * 100).toFixed(1);

  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {countTotalFeedback}</li>
      <li>Positive feedback:{positiveFeedback}%</li>
    </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}

export default Statistics;


