import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './questionOne.css';

class QuestionOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			label: "I've been clicked: ",
			counter: 0,
		};
	}

	// don't define a new function every render
	// arrow function keeps 'this' context without having to bind function in constructor
	handleOnClick = () => {
		const { counter } = this.state;

		this.setState({
			counter: counter + 1,
		});
	}

	render() {
		const { counter, label } = this.state;

		return (
			<div className="question-one">
				<Button
					variant="contained"
					onClick={this.handleOnClick}
				>
					{`${label} ${counter} times`}
				</Button>
			</div>
		);
	}
}

export default QuestionOne;
