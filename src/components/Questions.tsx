import styles from './styles/Questions.module.css'

export default function CustomForm({ forms }: FormProps) {
	const TIME = new Date()

	return (
		<form className={styles.wrapper}>
			{forms.map((form) => (
				<div className={styles.questioncontainer}>
					<h2 className={styles.question}>{form.formName}</h2>
					<p className={styles.number_of_questions}>
						{`Number of questions: ${form.numberOfQuestions}`}
					</p>
					<p className={styles.date_created}>{`Date of creation: 
						${TIME.getFullYear()} 
						${TIME.getMonth()}/${TIME.getDay()} 
						${TIME.getHours()}:${TIME.getMinutes()}
						`}</p>
				</div>
			))}
		</form>
	)
}

export interface FormProps {
	forms: FormsType[]
}

export type FormsType = {
	formName: string
	numberOfQuestions: string
	dateCreated: string
}
