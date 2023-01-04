import React, { Component } from 'react';
import css from './Feedback.module.css'

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';

class Section extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }

    options = {
        visual: false,
    }

    onClickGood = () => {
        this.setState(prevState => ({ good: prevState.good + 1, }));
        this.options.visual = true;
    };

    onClickNeutral = () => {
        this.setState(prevState => ({ neutral: prevState.neutral + 1, }));
        this.options.visual = true;
    };

    onClickBad = () => {
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        this.options.visual = true;
    };

    show = () => {
        this.options.visual = true
    };

    render() {
        return (
            <section>
                <h1 className={css.title}>{this.props.title}</h1>
                <FeedbackOptions options={this.show} onLeaveFeedback={[this.onClickGood, this.onClickBad, this.onClickNeutral]} />
                <h1 className={css.title}>Statistics</h1>
                {!this.options.visual && (
                    <Notification message="There is no feedback" />
                )}
                {this.options.visual && (
                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
                )}
            </section>
        )

    }
};

export default Section;