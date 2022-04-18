import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { v4 as uuidV4 } from 'uuid';

import Header from './components/Header';
import AboutPage from './pages/AboutPage';

import FeedbackStats from './components/FeedbackStats';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

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
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
							</>
						}
					/>
					<Route path='/about' element={<AboutPage />} />
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	);
};

export default App;
