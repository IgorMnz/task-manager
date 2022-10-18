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
                <input type="checkbox" className={styles['custom-checkbox']} id="visible" name="visible" value="yes"/>
                <label htmlFor="visible">Видимый</label>
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