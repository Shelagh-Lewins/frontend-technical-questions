
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
	},
	root: {
		width: '100%',
	},
	inline: {
		display: 'inline',
	},
}));

const QuestionList = (props) => {
	const { children } = props;
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Paper>
				<List className={classes.root}>
					{children}
				</List>
			</Paper>
		</div>
	);
};

QuestionList.propTypes = {
	// single or multiple child elements appear differently
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.node,
	]).isRequired,
};

export default QuestionList;
