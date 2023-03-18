import './App.css'

import CustomForm, { Questionstype } from './components/Questions'

function App() {
	const questions: Questionstype[] = [
		{
			question: 'Are you here?',
			checkbox_answer: true,
			required: true,
		},
		{
			question: 'Are you there?',
			answer: '',
			required: false,
		},
		{
			question: 'Are you anywhere?',
			answer: '',
			required: true,
		},
		{
			question: 'test4',
			checkbox_answer: true,
			required: true,
		},
		{
			question: 'test5',
			checkbox_answer: true,
			required: false,
		},
		{
			question: 'test6',
			answer: '',
			required: true,
		},
		{
			question: 'test7',
			answer: '',
			required: false,
		},
	]

	return (
		<main className='wrapper'>
			<CustomForm questions={questions} />
		</main>
	)
}

export default App
