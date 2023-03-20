import './App.css'

import CustomForm, { Questionstype } from './components/Questions'

function App() {
	const questions: Questionstype[] = [
		{
			question: 'Are you here?',
			checkbox_answer: true,
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'nrejhntuihtruiyt?',
			answer: '',
			required: false,
			key: `${Date.now()}`,
		},
		{
			question: 'Are you there?',
			answer: '',
			required: false,
			key: `${Date.now()}`,
		},
		{
			question: 'Are you anywhere?',
			answer: '',
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'test4',
			checkbox_answer: true,
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'test5',
			checkbox_answer: true,
			required: false,
			key: `${Date.now()}`,
		},
		{
			question: 'test6',
			answer: '',
			required: true,
			key: `${Date.now()}`,
		},
		{
			question: 'test7',
			answer: '',
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
