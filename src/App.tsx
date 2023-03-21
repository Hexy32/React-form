import './App.css'

import CustomForm, { FormsType } from './components/Questions'
import NewForm from './components/NewForm'

function App() {
	const forms: FormsType[] = [
		{
			formName: 'Something idfk',
			numberOfQuestions: '22',
			dateCreated: `${Date.now()}`,
		},
		// {
		// 	question: 'nrejhntuihtruiyt?',
		// 	answer: {
		// 		text_answer: true,
		// 	},
		// 	required: false,
		// 	key: `${Date.now()}`,
		// },
		// {
		// 	question: 'Are you there?',
		// 	answer: {
		// 		checkbox_answer: true,
		// 	},
		// 	required: false,
		// 	key: `${Date.now()}`,
		// },
		// {
		// 	question: 'Are you anywhere?',
		// 	answer: {
		// 		text_answer: true,
		// 	},
		// 	required: true,
		// 	key: `${Date.now()}`,
		// },
		// {
		// 	question: 'test4',
		// 	answer: {
		// 		text_answer: true,
		// 	},
		// 	required: true,
		// 	key: `${Date.now()}`,
		// },
		// {
		// 	question: 'test5',
		// 	answer: {
		// 		text_answer: true,
		// 	},
		// 	required: false,
		// 	key: `${Date.now()}`,
		// },
		// {
		// 	question: 'test6',
		// 	answer: {
		// 		checkbox_answer: true,
		// 	},
		// 	required: true,
		// 	key: `${Date.now()}`,
		// },
		// {
		// 	question: 'test7',
		// 	answer: {
		// 		text_answer: true,
		// 	},
		// 	required: false,
		// 	key: `${Date.now()}`,
		// },
	]

	return (
		<>
			<main className='wrapper'>
				<CustomForm forms={forms} />
			</main>
			<NewForm forms={forms} />
		</>
	)
}

export default App
