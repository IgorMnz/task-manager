import React, {FC} from 'react';
import styles from "./taskListItem.module.scss"
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'
import {ITasks} from "../../../types/ITasks";

interface TaskListItemProps {
    task: ITasks
}

const TaskListItem: FC<TaskListItemProps> = ({task}) => {
    return (
        <>
            <li>
                <div
                    className={task.visible && !task.ended ? styles['item-green'] : task.ended && task.visible ? styles['item-dark'] : styles['item-light']}>
                    <div className={styles.check}>
                        <label htmlFor={task.title}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id={task.title}
                                name={task.title}
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