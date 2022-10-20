import React, {FC} from 'react';
import styles from "./taskListItem.module.scss"
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'
import {ITasks} from "../../../types/ITasks";

interface TaskListItemProps {
    data: ITasks[]
}

const TaskListItem: FC<TaskListItemProps> = ({data}) => {
    return (
        <>
            {data.map((item) => (
                <li key={item.id}>
                    <div
                        className={item.visible && !item.ended ? styles['item-green'] : item.ended && item.visible ? styles['item-dark'] : styles['item-light']}>
                        <div className={styles.check}>
                            <label htmlFor={item.title}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    id={item.title}
                                    name={item.title}
                                />
                                <span className={styles['custom-checkbox']}></span>
                            </label>
                        </div>
                        <div className={styles.title}>
                            {item.title}
                        </div>
                        <div className={styles.description}>
                            {item.description}
                        </div>
                        <div className={styles.time}>
                            {item.time}
                        </div>
                        <div className={styles.visible}>
                            {item.visible ? <VisibleSvg/> : <NotVisibleSvg/>}
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};

export default TaskListItem;