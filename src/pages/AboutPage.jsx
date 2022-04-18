import { Link } from 'react-router-dom';

import Card from '../components/shared/Card';

const AboutPage = () => {
	return (
		<Card>
			<div className='about'>About This Project</div>
			<p>This is a React App to leave feedback for a product or service</p>
			<p>Version: 1.0.0</p>

			<p>
				<Link to='/'>Back to Home</Link>
			</p>
		</Card>
	);
};

export default AboutPage;
