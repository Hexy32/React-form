import styles from './styles/Questions.module.css'

export default function CustomForm({ forms }: FormProps) {
	let a = 0
	console.log(a)
	a += 1

	return (
		<form className={styles.wrapper}>
			{forms.map((form, i) => (
				<div
					key={i}
					className={styles.questioncontainer}>
					<h2
						key={i}
						className={styles.question}>
						{form.formName}
					</h2>
					<p
						key={i}
						className={styles.number_of_questions}>
						{`Number of questions: ${form.numberOfQuestions}`}
					</p>
					<p
						key={i}
						className={styles.date_created}>
						{form.dateCreated}
					</p>
				</div>
			))}
		</form>
	)
}

export interface FormProps {
	forms: FormsType[]
	formData?: string
	setFormData?: any
}

export type FormsType = {
	formName: string
	numberOfQuestions: string
	dateCreated: string
}
