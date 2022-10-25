import React, {FC, useContext} from 'react';
import styles from "./taskListItem.module.scss"
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'
import {ITasks} from "../../../types/ITasks";
import {TaskListContext} from "../../../context/TaskListContext";

interface TaskListItemProps {
    task: ITasks
}

const TaskListItem: FC<TaskListItemProps> = ({task}) => {

    const {handleCheck, findItem} = useContext(TaskListContext)


    return (
        <>
            <li onClick={() => findItem(task.id)}>
                <div
                    className={task.visible ? styles['item-dark'] : styles['item-light']}>
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