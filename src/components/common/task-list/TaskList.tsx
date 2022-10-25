import React, {FC, useContext, useEffect, useState} from 'react';
import styles from "./taskList.module.scss"
import MenuBar from "../menu-bar/MenuBar";
import FilterBar from "../filter-bar/FilterBar";
import TaskListItem from "../task-list-item/TaskListItem";
import {TaskListContext} from "../../../context/TaskListContext";

const TaskList: FC = () => {

    const {tasks} = useContext(TaskListContext)

    const [scroll, setScroll] = useState<boolean>(false)

    const scrollCheck = () => {
        const block: HTMLElement | null = document.getElementById('block')
        if (block !== null) {
            const isScroll: boolean = block.scrollHeight > block.clientHeight
            isScroll ? setScroll(true) : setScroll(false)
        }
    }

    useEffect(() => {
        scrollCheck()
    }, [scroll, tasks])

    return (
        <div className={styles.wrapper}>
            <MenuBar/>
            <FilterBar/>
            {scroll && <div className={styles['shadow-box']}></div>}
            {tasks.length
                ?
                <ul id='block' className={styles['task-list']}>
                    {tasks.map((task) => {
                        return <TaskListItem task={task} key={task.id}/>
                    })}
                </ul>
                :
                <div className={styles['no-tasks']}>Нет задач</div>
            }
        </div>
    );
};

export default TaskList;