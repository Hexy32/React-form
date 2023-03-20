import styles from './styles/Questions.module.css'

export default function CustomForm({ questions }: QuestionProps) {
	return (
		<form className={styles.wrapper}>
			{questions.map((question, i) => (
				<div className={styles.questioncontainer}>
					<p
						className={styles.question}
						key={question.key}>
						{question.question}
					</p>
					<p className={styles.required}>{question.required && 'REQUIRED'}</p>
					<input
						type={question.checkbox_answer ? 'checkbox' : 'text'}
						placeholder='Type your answer here...'
						className={question.checkbox_answer ? styles.checkbox_answer : styles.answer}
					/>
				</div>
			))}
		</form>
	)
}

interface QuestionProps {
	questions: Questionstype[]
}

export type Questionstype = {
	question: string
	answer?: string
	required: boolean
	checkbox_answer?: boolean
	key: string
}
