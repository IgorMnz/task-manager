import React, {FC, useEffect, useState} from 'react';
import styles from "./taskList.module.scss"
import MenuBar from "../menu-bar/MenuBar";
import FilterBar from "../filter-bar/FilterBar";
import {ITasks} from "../../../types/ITasks";
import TaskListItem from "../task-list-item/TaskListItem";

const TaskList: FC = () => {

    const [scroll, setScroll] = useState<boolean>(false)
    const [data, setData] = useState<ITasks[]>([
        {id: 1, title: 'Элемент #1', description: 'Описание элемента #1', time: 1.25, visible: true, ended: false},
        {id: 2, title: 'Элемент #2', description: 'Описание элемента #2', time: 1.25, visible: true, ended: true},
        {id: 3, title: 'Элемент #3', description: 'Описание элемента #3', time: 1.25, visible: false, ended: true},
        {id: 4, title: 'Элемент #4', description: 'Описание элемента #4', time: 1.25, visible: false, ended: true},
        {id: 5, title: 'Элемент #5', description: 'Описание элемента #5', time: 1.25, visible: true, ended: true},

    ])

    const scrollCheck = () => {
        const block: HTMLElement | null = document.getElementById('block')
        if (block !== null) {
            const isScroll: boolean = block.scrollHeight > block.clientHeight
            isScroll ? setScroll(true) : setScroll(false)
        }
    }

    useEffect(() => {
        scrollCheck()
    }, [scroll])

    return (
        <div className={styles.wrapper}>
            <MenuBar/>
            <FilterBar/>
            {scroll && <div className={styles['shadow-box']}></div>}
            <ul id='block' className={styles['task-list']}>
                <TaskListItem data={data}/>
            </ul>
        </div>
    );
};

export default TaskList;