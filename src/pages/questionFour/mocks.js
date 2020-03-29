import AcUnit from '@material-ui/icons/AcUnit';
// Assume the mock data will be extended in future
/* eslint-disable import/prefer-default-export */

global.defaultMock = {
	contact: {},
};

const createDefaultMock = () => {
	global.defaultMock.species = 'Human';
	global.defaultMock.name = 'Jon Snow';
	global.defaultMock.Icon = AcUnit;
	global.defaultMock.description = 'You know nothing, Jon Snow.';
	global.defaultMock.contact.email = `${Math.floor(Math.random() * 100000)}@test.com`;
	global.defaultMock.contact.phone = `0789 ${Math.floor(Math.random() * 100000)}`;
};

const createRowData = ({
	name,
	species,
	Icon,
	description,
}) => {
	createDefaultMock();
	const rowData = { ...global.defaultMock };
	rowData.name = name || global.defaultMock.name;
	rowData.species = species || global.defaultMock.species;
	//rowData.Icon = Icon || global.defaultMock.icon;
	rowData.Icon = Icon || global.defaultMock.Icon; // works TODO remove
	rowData.description = description || global.defaultMock.description;
	rowData.contact = { ...global.defaultMock.contact }; // works TODO remove

	return rowData;
};


export { createRowData };
