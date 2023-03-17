import './App.css'

import CustomForm, { Questionstype } from './components/Questions'

function App() {
	const questions: Questionstype[] = [
		{
			question: 'test1',
			answer: '',
			required: true,
		},
		{
			question: 'test2',
			answer: '',
			required: false,
		},
		{
			question: 'test3',
			answer: '',
			required: true,
		},
		{
			question: 'test4',
			answer: '',
			required: true,
		},
		{
			question: 'test5',
			answer: '',
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
