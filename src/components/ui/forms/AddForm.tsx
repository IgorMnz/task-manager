import React, {FC, useContext, useEffect, useState} from 'react';
import styles from "./addForm.module.scss"
import MyButton from "../buttons/MyButton";
import {TaskListContext} from "../../../context/TaskListContext";

const AddForm: FC = () => {

    const {editItem, editTask, addTask} = useContext(TaskListContext)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        time: '',
        visible: false,
        checked: false
    })

    useEffect(() => {
        if (editItem !== undefined && editItem !== null) {
            setFormData({
                ...formData,
                title: editItem.title,
                description: editItem.description,
                time: editItem.time,
                visible: editItem.visible
            })
        }
    }, [editItem])

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }

    const handleChangeTime = (e: any) => {
        if (/^[\d]*\.?[\d]{0,2}$/.test(e.target.value)) {
            setFormData({
                ...formData,
                time: e.target.value
            })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (editItem !== undefined && editItem !== null) {
            editTask(formData.title, formData.description, formData.time, formData.visible, formData.checked, editItem.id)
        } else {
            addTask(formData.title, formData.description, formData.time, formData.visible, false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.add_form} onSubmit={handleSubmit}>
                <div className={styles.title}>
                    Добавление/редактирование задачи
                </div>
                <input
                    name='title'
                    type='text'
                    placeholder='Название'
                    className={styles.input}
                    value={formData.title}
                    onChange={e => handleChange(e)}
                />
                <textarea
                    name='description'
                    placeholder='Описание'
                    className={styles.input_textarea}
                    value={formData.description}
                    onChange={e => handleChange(e)}
                />
                <input
                    name='time'
                    type='text'
                    placeholder='Время на выполнение задачи, ч.'
                    className={styles.input}
                    value={formData.time}
                    onChange={e => handleChangeTime(e)}
                />
                <label
                    htmlFor="visible"
                    className={styles['checkbox-label']}
                >
                    <input
                        id="visible"
                        name='visible'
                        type="checkbox"
                        className={styles.checkbox}
                        onChange={e => handleChange(e)}
                        checked={formData.visible}
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