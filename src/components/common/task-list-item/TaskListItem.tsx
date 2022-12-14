import React, {FC, useContext} from 'react';
import styles from "./taskListItem.module.scss"
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'
import {ITasks} from "../../../types/types";
import {TaskListContext} from "../../../context/TaskListContext";

interface TaskListItemProps {
    task: ITasks,
    index: number,
    dragItem: any,
    dragOverItem: any,
    handleSort: () => void,
}

const TaskListItem: FC<TaskListItemProps> = ({task, index, dragItem, dragOverItem, handleSort}) => {

    const {handleCheck, findItem, editItem} = useContext(TaskListContext)

    return (
        <>
            <li
                onClick={() => findItem(task.id)}
                draggable
                onDragStart={() => (dragItem.current = index)}
                onDragEnter={() => (dragOverItem.current = index)}
                onDragEnd={handleSort}
                onDragOver={(e) => e.preventDefault()}>
                <div
                    className={editItem?.id === task.id ? styles['item-green'] : task.visible ? styles['item-dark'] : styles['item-light']}>
                    <div className={styles.check}>
                        <label htmlFor={task.id}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id={task.id}
                                name={task.title}
                                value={task.id}
                                onChange={() => handleCheck(task.id)}
                                checked={task.checked}
                            />
                            <span className={styles['custom-checkbox']}></span>
                        </label>
                    </div>
                    <div className={styles.title}>
                        {task.title}
                    </div>
                    <div className={styles.description}>
                        {task.description}
                    </div>
                    <div className={styles.time}>
                        {task.time}
                    </div>
                    <div className={styles.visible}>
                        {task.visible ? <VisibleSvg/> : <NotVisibleSvg/>}
                    </div>
                </div>
            </li>
        </>
    );
};

export default TaskListItem;