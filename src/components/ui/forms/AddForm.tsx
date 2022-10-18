import React, {FC} from 'react';
import styles from "./addForm.module.scss"
import MyButton from "../buttons/MyButton";

const AddForm: FC = () => {
    return (
        <div className={styles.wrapper}>
            <form className={styles.add_form}>
                <div className={styles.title}>
                    Редактирование задачи
                </div>
                <input type='text' placeholder='Название' className={styles.input}/>
                <textarea placeholder='Описание' className={styles.input_textarea}/>
                <input type='text' placeholder='Время на выполнение задачи, ч.' className={styles.input}/>
                <label htmlFor="visible" className={styles['checkbox-label']}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        id="visible"
                        name="visible"
                    />
                    <span className={styles['custom-checkbox']}></span>
                    <span className={styles['checkbox-text']}>Видимый</span>
                </label>
                <div className={styles.actions}>
                    <MyButton variant='primary' type='submit'>
                        Применить
                    </MyButton>
                    <MyButton variant='secondary'>
                        Отменить
                    </MyButton>
                </div>
            </form>

        </div>
    );
};

export default AddForm;