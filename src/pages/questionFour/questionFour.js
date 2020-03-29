
import React, { Component } from 'react';

import Android from '@material-ui/icons/Android';
import Pets from '@material-ui/icons/Pets';
import BugReport from '@material-ui/icons/BugReport';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import QuestionList from './questionList';
import QuestionListItem from './questionListItem';
import { createRowData } from './mocks';

import styles from './styles';

const createMockData = () => [
	createRowData({
		species: 'Robot',
		name: 'T-100',
		Icon: Android,
		description: 'Likes long walks, walking over the bones of its enemies',
	}),
	createRowData({
		species: 'Bug',
		name: 'Barry',
		Icon: BugReport,
		description: 'Likes long walks, and creating problems in all your code',
	}),
	createRowData({
		species: 'Rabbit',
		name: 'Roger',
		Icon: Pets,
		description: 'Likes long walks and getting to know the inner you',
	}),
	createRowData({
		species: null,
		name: null,
		Icon: null,
		description: null,
	}),
];

class QuestionFour extends Component {
	constructor(props) {
		super(props);

		const mockData = createMockData();

		this.state = {
			mockData,
			scoreValue: 10,
		};
	}

	componentDidUpdate() {
		this.setState({
			selectedListItem: this.state.mockData[0].contact.email,
		});
	}

	handleOnClick = (listItem) => {
		this.setState({
			selectedListItem: listItem,
		});
	}

	handleChange = (event) => {
		let { value } = event.target;
		value = parseInt(value, 10);

		if (value) {
			this.setState({
				scoreValue: value,
			});
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const {
			mockData,
			scoreValue,
			selectedListItem,
		} = this.state;

		const selectedIndex = mockData.findIndex((listItem) => listItem.contact.email === selectedListItem);
		const newData = [...mockData];
		newData[selectedIndex].score = scoreValue;

		this.setState({
			mockData: newData,
		});
	}

	renderForm() {
		const { classes } = this.props;
		const { scoreValue } = this.state;

		return (
			<form
				className={classes.form}
				onSubmit={this.handleSubmit}
			>
				<label htmlFor="score">
					Score:
					<input
						className={classes.input}
						type="number"
						id="score"
						min="0"
						name="score"
						value={scoreValue}
						onChange={this.handleChange}
					/>
				</label>
				<input type="submit" value="Set score" />
			</form>
		);
	}

	render() {
		const { mockData, selectedListItem } = this.state;

		return (
			<>
				{this.renderForm()}
				<QuestionList>
					{mockData.map((item, i) => (
						<QuestionListItem
							divider={i < mockData.length - 1}
							handleOnClick={this.handleOnClick}
							item={item}
							key={item.contact.email}
							selected={selectedListItem === item.contact.email}
						/>
					))}
				</QuestionList>
			</>
		);
	}
}

QuestionFour.propTypes = {
	classes: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default withStyles(styles)(QuestionFour);
