import './App.css'

import CustomForm, { FormsType } from './components/Questions'
import NewForm from './components/NewForm'
import { useEffect, useState } from 'react'

function App() {
	const [formData, setFormData] = useState<FormsType[] | undefined>(undefined)

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
						<CustomForm
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
