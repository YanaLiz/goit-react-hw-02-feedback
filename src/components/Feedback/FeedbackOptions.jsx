import React from 'react';
import css from './Feedback.module.css';
import PropTypes from 'prop-types'

const FeedbackOptions = ({ onLeaveFeedback }) => (
    <section className={css.sectionBtn}>
        <button
            type="button"
            className={css.button}
            onClick={onLeaveFeedback[0]}>
            Good
        </button>
        <button
            type="button"
            className={css.button}
            onClick={onLeaveFeedback[2]}>
            Neutral
        </button>
        <button
            type="button"
            className={css.button}
            onClick={onLeaveFeedback[1]}>
            Bad
        </button>
    </section>
)

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.array.isRequired,
}

export default FeedbackOptions;