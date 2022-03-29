import { v4 as uuidV4 } from 'uuid';
import { useState } from 'react';

import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';

import FeedbackData from './data/FeedbackData';

const App = () => {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = id => {
		if (window.confirm('Are you shure you want to delete?')) {
			setFeedback(feedback.filter(item => item.id !== id));
		}
	};

	const addFeedback = newFeedback => {
		newFeedback.id = uuidV4();
		setFeedback([newFeedback, ...feedback]);
	};

	return (
		<>
			<Header />
			<div className='container'>
				<FeedbackForm handleAdd={addFeedback} />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
};

export default App;
