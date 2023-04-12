import styles from './styles/Questions.module.css'
import svg from '/src/assets/close.svg'
import EditForm from './EditForm'

export default function CustomForm({ formData, setFormData }: CustomFormProps) {
	function deleteForm(e: React.MouseEvent) {
		const elem = e.target as HTMLButtonElement
		const formIndex = formData.findIndex((form) => form.uuid === elem.id.slice(1))
		const formDataCopy = [...formData]
		formDataCopy.splice(formIndex, 1)
		setFormData(formDataCopy)
	}

	return (
		<form className={styles.wrapper}>
			{formData.map((form, i) => (
				<div
					key={i}
					className={styles.questioncontainer}>
					<div className={styles.form_info}>
						<h2 className={styles.question}>{form.formName}</h2>
						<p className={styles.number_of_questions}>
							{`Number of questions: ${form.numberOfQuestions}`}
						</p>
						<p className={styles.date_created}>{form.dateCreated}</p>
					</div>
					<EditForm />
					<button
						id={'i' + form.uuid}
						onClick={deleteForm}
						className={styles.delete_form}>
						✖
					</button>
				</div>
			))}
		</form>
	)
}

export interface CustomFormProps {
	formData: FormsType[]
	setFormData: React.Dispatch<React.SetStateAction<FormsType[] | undefined>>
}

export type FormsType = {
	uuid: string
	formName: string
	numberOfQuestions: string
	dateCreated: string
}
