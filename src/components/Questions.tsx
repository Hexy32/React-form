import styles from './styles/Questions.module.css'

export default function CustomForm({ questions }: QuestionProps) {
	return (
		<form className={styles.wrapper}>
			{questions.map((question, i) => (
				<div className={styles.questioncontainer}>
					<p
						className={styles.question}
						key={i}>
						{question.question}
					</p>
					<p className={styles.required}>{question.required ? 'REQUIRED' : null}</p>
					<input
						type='text'
						placeholder='Type your answer here...'
						className={styles.answer}
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
	answer: string
	required: boolean
}
