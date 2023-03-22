import { FormProps } from './Questions'
import styles from './styles/NewForm.module.css'

export default function NewForm({ forms, setFormData }: FormProps) {
	const TIME = new Date()

	const newFormObject = {
		formName: 'test',
		numberOfQuestions: '10',
		dateCreated: `Date of creation:
		${TIME.getFullYear()}
		${TIME.getMonth()}/${TIME.getDay()}
		${TIME.getHours()}:${TIME.getMinutes()}
	`,
	}

	const newFormFunc = () => {
		setFormData(forms.push(newFormObject))
	}

	return (
		<button
			className={styles.new_form_btn}
			onClick={newFormFunc}>
			+ Add form
		</button>
	)
}
