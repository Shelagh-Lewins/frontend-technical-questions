import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(() => ({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
	'secondary-span': {
		display: 'block',
	},
	'list-item': {
		border: '2px solid transparent',
		borderRadius: '4px',
		margin: '8px',
		width: 'auto',
	},
	selected: {
		borderColor: '#3f51b5',
	},
}));

const QuestionListItem = (props) => {
	const {
		divider,
		handleOnClick,
		item: {
			contact: {
				phone,
				email,
			},
			description,
			Icon,
			name,
			species,
			score,
		},
		selected,
	} = props;

	const classes = useStyles();

	return (
		<>
			<ListItem
				alignItems="flex-start"
				className={`${classes['list-item']} ${selected ? classes.selected : ''}`}
				onClick={() => handleOnClick(email)}
			>
				<ListItemAvatar>
					<Avatar>
						<Icon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${name}: ${species || 'Other'}`}
					secondary={(
						<>
							<span className={classes['secondary-span']}>
								<Typography
									variant="subtitle2"
									variantMapping={{ subtitle2: 'span' }}
									className={classes.header}
								>
									Score:
								</Typography>
								<Typography
									variant="body2"
									variantMapping={{ body2: 'span' }}
									className={classes.label}
								>
									{score}
								</Typography>
							</span>
							<span className={classes['secondary-span']}>
								<Typography
									variant="subtitle2"
									variantMapping={{ subtitle2: 'span' }}
									className={classes.header}
								>
									Description:
								</Typography>
								<Typography
									variant="body2"
									variantMapping={{ body2: 'span' }}
									className={classes.label}
								>
									{description}
								</Typography>
							</span>
							<span className={classes['secondary-span']}>
								<Typography
									variant="subtitle2"
									variantMapping={{ subtitle2: 'span' }}
									className={classes.header}
								>
									Phone:
								</Typography>
								<Typography
									variant="body2"
									variantMapping={{ body2: 'span' }}
									className={classes.label}
								>
									{phone}
								</Typography>
							</span>
							<span className={classes['secondary-span']}>
								<Typography
									variant="subtitle2"
									variantMapping={{ subtitle2: 'span' }}
									className={classes.header}
								>
									Email:
								</Typography>
								<Typography
									variant="body2"
									variantMapping={{ body2: 'span' }}
									className={classes.label}
								>
									{email}
								</Typography>
							</span>
						</>
					)}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</>
	);
};

QuestionListItem.propTypes = {
	divider: PropTypes.bool.isRequired,
	handleOnClick: PropTypes.func.isRequired,
	item: PropTypes.objectOf(PropTypes.any).isRequired,
	selected: PropTypes.bool.isRequired,
};

export default QuestionListItem;
