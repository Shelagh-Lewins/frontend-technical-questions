
import React, { Component } from 'react';

import Android from '@material-ui/icons/Android';
import Pets from '@material-ui/icons/Pets';
import BugReport from '@material-ui/icons/BugReport';

import QuestionList from './questionList';
import QuestionListItem from './questionListItem';
import { createRowData } from './mocks';

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

	render() {
		const { mockData, selectedListItem } = this.state;

		return (
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
		);
	}
}

export default QuestionFour;
