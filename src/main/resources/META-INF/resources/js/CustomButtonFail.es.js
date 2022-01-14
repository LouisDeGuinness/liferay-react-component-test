import React from 'react';

import ClayButton from '@clayui/button';

const CustomButton = (props) => {
	
	const [name, setName] = React.useState('test');
	
	return (
		<ClayButton displayStyle='primary'>
			TEST
		</ClayButton>
		);
}

export default CustomButton;
