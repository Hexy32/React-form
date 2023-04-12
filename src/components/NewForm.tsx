import { FormsType } from './Questions'
import styles from './styles/NewForm.module.css'

export default function NewForm({ formData, setFormData }: NewFormProps) {
	const time = new Date()

	const newFormFunc = () => {
		setFormData((forms) => [
			...(forms ? forms : []),
			{
				uuid: crypto.randomUUID(),
				formName: 'test',
				numberOfQuestions: `Number of questions: ${Math.floor(Math.random() * 100)}`,
				dateCreated: `Date of creation:
				${time.getFullYear()}
				${time.getMonth() < 10 ? '0' + time.getMonth() : time.getMonth()}/${
					time.getDay() < 10 ? '0' + time.getDay() : time.getDay()
				}
				${time.getHours() < 10 ? '0' + time.getHours() : time.getHours()}:${
					time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
				}
			`,
				lastEdit: 'Last edited: loading......', //TODO
			},
		])
	}

	return (
		<button
			className={styles.new_form_btn}
			onClick={newFormFunc}>
			+ Add form
		</button>
	)
}

export interface NewFormProps {
	formData: FormsType[]
	setFormData: React.Dispatch<React.SetStateAction<FormsType[] | undefined>>
}
