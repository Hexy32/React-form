import { FormProps } from './Questions'
import styles from './styles/NewForm.module.css'

export default function NewForm({ forms }: FormProps) {
	return (
		<button
			className={styles.new_form_btn}
			onClick={newFormFunc}>
			+ Add form
		</button>
	)
}

function newFormFunc() {
	console.log('test')
}
