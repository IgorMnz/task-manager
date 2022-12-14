import React, {ChangeEvent, FC, useContext, useEffect, useState} from 'react';
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

    const [blur, setBlur] = useState({
        title: false,
        description: false,
        time: false
    })

    const [errors, setErrors] = useState({
        title: 'Введите корректное название',
        description: 'Введите корректное описание',
        time: 'Введите корректное время'
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
            setBlur({title: false, description: false, time: false})
        }
    }, [editItem])

    // Функция для обработчика событий onChange для поля title и валидации поля
    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            title: e.target.value
        })
        if (e.target.value.length > 128) {
            setErrors({...errors, title: 'Длинна должна быть не более 128 символов'})
        } else if (e.target.value === '') {
            setErrors({...errors, title: 'Введите корректное название'})
        } else {
            setErrors({...errors, title: ''})
        }
    }

    // Функция для обработчика событий onChange для поля description и валидации поля
    const handleChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            description: e.target.value
        })
        if (e.target.value.length > 512) {
            setErrors({...errors, description: 'Длинна должна быть не более 512 символов'})
        } else if (e.target.value === '') {
            setErrors({...errors, description: 'Введите корректное описание'})
        } else {
            setErrors({...errors, description: ''})
        }
    }

    // Функция для обработчика событий onChange для поля time и валидации поля
    const handleChangeTime = (e: ChangeEvent<HTMLInputElement>) => {
        if (/^[\d]*\.?[\d]{0,2}$/.test(e.target.value)) {
            setFormData({
                ...formData,
                time: e.target.value
            })
        }
        if (e.target.value === '') {
            setErrors({...errors, time: 'Введите корректное время'})
        } else {
            setErrors({...errors, time: ''})
        }
    }

    // Функция для обработчика событий onChange для чекбокса
    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            visible: e.target.checked
        })
    }

    // Функция для обработчика событий onSubmit для формы
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (editItem !== undefined && editItem !== null) {
            if (formData.time[0] === '.' || formData.time[formData.time.length - 1] === '.') {
                setBlur({...blur, time: true})
                setErrors({...errors, time: 'Введите корректное время'})
            } else {
                editTask(formData.title, formData.description, formData.time, formData.visible, formData.checked, editItem.id)
            }
        } else {
            if (formData.time[0] === '.' || formData.time[formData.time.length - 1] === '.') {
                setBlur({...blur, time: true})
                setErrors({...errors, time: 'Введите корректное время'})
            } else {
                addTask(formData.title, formData.description, formData.time, formData.visible, false)
            }

        }
    }

    // Функция для обработчика событий onBlur для полей title, description, time
    const handleBlur = (e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>) => {
        switch (e.target.name) {
            case "title":
                if (formData.title.length == 0) {
                    setBlur({...blur, title: true})
                }
                break
            case "description":
                if (formData.description.length == 0) {
                    setBlur({...blur, description: true})
                }
                break
            case "time":
                if (formData.time.length == 0) {
                    setBlur({...blur, time: true})
                }
                break
        }
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.add_form} onSubmit={handleSubmit}>
                <div className={styles.title}>
                    Добавление/редактирование задачи
                </div>
                <div className={styles.inputs}>
                    <input
                        required
                        name='title'
                        type='text'
                        placeholder='Название'
                        className={(blur.title && errors.title) ? styles['input-error'] : styles.input}
                        value={formData.title}
                        onChange={e => handleChangeTitle(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    {(blur.title && errors.title) && <div className={styles.error}>{errors.title}</div>}
                    <textarea
                        required
                        name='description'
                        placeholder='Описание'
                        className={(blur.description && errors.description) ? styles['input-textarea-error'] : styles['input-textarea']}
                        value={formData.description}
                        onChange={e => handleChangeDescription(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    {(blur.description && errors.description) &&
                        <div className={styles.error}>{errors.description}</div>}
                    <input
                        required
                        name='time'
                        type='text'
                        placeholder='Время на выполнение задачи, ч.'
                        className={(blur.time && errors.time) ? styles['input-error'] : styles.input}
                        value={formData.time}
                        onChange={e => handleChangeTime(e)}
                        onBlur={(e) => handleBlur(e)}
                    />
                    {(blur.time && errors.time) && <div className={styles.error}>{errors.time}</div>}
                    <label
                        htmlFor="visible"
                        className={styles['checkbox-label']}
                    >
                        <input
                            id="visible"
                            name='visible'
                            type="checkbox"
                            className={styles.checkbox}
                            onChange={handleCheckbox}
                            checked={formData.visible}
                        />
                        <span className={styles['custom-checkbox']}></span>
                        <span className={styles['checkbox-text']}>Видимый</span>
                    </label>
                </div>
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