import EditForm, { QuestionType } from './EditForm'

import { Fragment } from 'react'
import styles from './styles/Questions.module.css'

export default function CustomForms({ formData, setFormData }: CustomFormProps) {
	function deleteForm(e: React.MouseEvent) {
		const elem = e.target as HTMLButtonElement
		const formIndex = formData.findIndex((form) => form.uuid === elem.id.slice(1))
		const formDataCopy = [...formData]
		formDataCopy.splice(formIndex, 1)
		setFormData(formDataCopy)
	}

	return (
		<div className={styles.wrapper}>
			{formData.map((form, i) => (
				<Fragment key={i}>
					<div className={styles.questioncontainer}>
						<div className={styles.questioncontainer__form_info}>
							<h2 className={styles.questioncontainer__form_info__question}>{form.formName}</h2>
							<p
								className={
									styles.questioncontainer__form_info__number_of_questions
								}>{`${form.numberOfQuestions}`}</p>
							<p className={styles.questioncontainer__form_info__date_created}>
								{form.dateCreated}
							</p>
							<p className={styles.questioncontainer__form_info__last_edited}>{form.lastEdit}</p>
						</div>
						<div className={styles.questioncontainer__form_buttons}>
							<EditForm
								formData={formData}
								setFormData={setFormData}
								index={i}
							/>
							<button
								id={'i' + form.uuid}
								onClick={deleteForm}
								className={styles.questioncontainer__form_buttons__delete_form}>
								✖
							</button>
						</div>
					</div>
					<div className={styles.question_creation_UI}>
						{form.questionArr.map((questionArr, i) => {
							return (
								<div
									className={styles.question}
									key={i}>
									{questionArr.question}
								</div>
							)
						})}
						<button
							onClick={() => {
								setFormData((formData) => {
									const forms = [...formData!]
									forms[i].questionArr.push({ question: 'test' })
									return forms
									//! BUG: makes 2 'test' after making one
								})
							}}
							className={styles.question_creation_UI__new_question_btn}>
							+ New Question
						</button>
					</div>
				</Fragment>
			))}
		</div>
	)
}

export interface CustomFormProps {
	formData: FormType[]
	setFormData: React.Dispatch<React.SetStateAction<FormType[] | undefined>>
}

export type FormType = {
	uuid: string
	formName: string
	numberOfQuestions: string // !remove
	dateCreated: string // TODO number
	lastEdit: string // TODO number
	questionArr: QuestionType[]
}
