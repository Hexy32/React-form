import styles from './styles/EditForm.module.css'
import pensvg from '../assets/pen.svg'
import { FormType } from './CustomForms'

export default function EditForm() {
	return (
		<>
			<button className={styles.open_form_question_creation_UI}>
				<img
					src={pensvg}
					alt='edit form button'
					className={styles.pen_svg_img}
				/>
			</button>
		</>
	)
}

export type QuestionType = {
	question: string
	// radialOptions: boolean
	// checkboxOptions: boolean
	// longAnswer: boolean
	// shortAnswer: boolean
}

interface EditFormProps {
	formData: FormType[]
	setFormData: React.Dispatch<React.SetStateAction<FormType[] | undefined>>
	index: number
}
