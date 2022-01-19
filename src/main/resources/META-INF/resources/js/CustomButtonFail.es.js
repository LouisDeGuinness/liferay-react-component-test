import React from 'react';

import ClayButton from '@clayui/button';

const CustomButton = () => {
	
	const [name, setName] = React.useState('works?');
	
	return (
		<ClayButton 
			displayStyle='primary'
			onClick={() => setName('WORKS!')}
		>
			{name}
		</ClayButton>
		);
}

export default CustomButton;
