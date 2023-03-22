import './App.css'

import CustomForm, { FormsType } from './components/Questions'
import NewForm from './components/NewForm'
import { useState } from 'react'

function App() {
	const forms: FormsType[] = [
		{
			formName: 'Something idfk',
			numberOfQuestions: '22',
			dateCreated: `${Date.now()}`,
		},
	]

	const [formData, setFormData] = useState(forms)

	console.log(formData)

	return (
		<>
			<main className='wrapper'>
				<CustomForm forms={formData} />
			</main>
			<NewForm
				forms={forms}
				setFormData={setFormData}
			/>
		</>
	)
}

export default App
