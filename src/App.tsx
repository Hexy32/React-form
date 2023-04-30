import './App.css'

import CustomForms, { FormType } from './components/CustomForms'
import NewForm from './components/NewForm'
import { QuestionType } from './components/EditForm'
import { useEffect, useState } from 'react'

function App() {
	const [formData, setFormData] = useState<FormType[] | undefined>(undefined)

	useEffect(() => {
		if (formData) {
			localStorage.setItem('formList', JSON.stringify(formData))
		} else {
			const rawData = localStorage.getItem('formList')
			if (rawData === null) return setFormData([])
			setFormData(JSON.parse(rawData))
		}
	}, [formData])

	return (
		<>
			{formData ? (
				<>
					<main className='wrapper'>
						<CustomForms
							formData={formData}
							setFormData={setFormData}
						/>
					</main>
					<NewForm
						formData={formData}
						setFormData={setFormData}
					/>
				</>
			) : (
				<p>loading...</p>
			)}
		</>
	)
}

export default App
