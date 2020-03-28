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
}));

const QuestionListItem = (props) => {
	const {
		divider,
		item: {
			description,
			id,
			Icon,
			name,
			species,
		},
	} = props;

	const classes = useStyles();

	return (
		<>
			<ListItem alignItems="flex-start">
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
									Guid:
								</Typography>
								<Typography
									variant="body2"
									variantMapping={{ body2: 'span' }}
									className={classes.label}
								>
									{id || 'ERROR '}
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
	item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default QuestionListItem;
