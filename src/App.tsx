import './App.css'

import CustomForm, { Questionstype } from './components/Questions'

function App() {
	const questions: Questionstype[] = [
		{
			question: 'Are you here?',
			answer: {
				checkbox_answer: true,
			},
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'nrejhntuihtruiyt?',
			answer: {
				text_answer: true,
			},
			required: false,
			key: `${Date.now()}`,
		},
		{
			question: 'Are you there?',
			answer: {
				checkbox_answer: true,
			},
			required: false,
			key: `${Date.now()}`,
		},
		{
			question: 'Are you anywhere?',
			answer: {
				text_answer: true,
			},
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'test4',
			answer: {
				text_answer: true,
			},
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'test5',
			answer: {
				text_answer: true,
			},
			required: false,
			key: `${Date.now()}`,
		},
		{
			question: 'test6',
			answer: {
				checkbox_answer: true,
			},
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'test7',
			answer: {
				text_answer: true,
			},
			required: false,
			key: `${Date.now()}`,
		},
	]

	return (
		<main className='wrapper'>
			<CustomForm questions={questions} />
		</main>
	)
}

export default App
