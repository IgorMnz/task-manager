import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import styles from "./taskList.module.scss"
import MenuBar from "../menu-bar/MenuBar";
import SortBar from "../sort-bar/SortBar";
import TaskListItem from "../task-list-item/TaskListItem";
import {TaskListContext} from "../../../context/TaskListContext";

const TaskList: FC = () => {

    const {tasks, setTasks, filterTasks, searchTask, term, filter} = useContext(TaskListContext)

    const [scroll, setScroll] = useState<boolean>(false)

    // Записываем в переменную список отфильтрованных по фильтрам или поиску задач
    const visibleData = filterTasks(searchTask(tasks, term), filter);

    // Функция по проверке высоты блока и добавления скролла для списка задач
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

    const dragItem = useRef<any>(null)
    const dragOverItem = useRef<any>(null)

    // Функция сортировки для drap&drop
    const handleSort = () => {

        let newTasksItems = [...tasks]

        // Удаляем и сохраняем содержимое перетаскиваемого элемента
        const draggedItemContent = newTasksItems.splice(dragItem.current, 1)[0]

        // Меняем позиции перетаскиваемых задач
        newTasksItems.splice(dragOverItem.current, 0, draggedItemContent)

        dragItem.current = null
        dragOverItem.current = null

        setTasks(newTasksItems)
    }

    return (
        <div className={styles.wrapper}>
            <MenuBar/>
            <SortBar/>
            {scroll && <div className={styles['shadow-box']}></div>}
            {visibleData.length
                ?
                <ul id='block' className={styles['task-list']}>
                    {visibleData.map((task, index) => {
                        return <TaskListItem
                            task={task}
                            key={task.id}
                            index={index}
                            dragItem={dragItem}
                            dragOverItem={dragOverItem}
                            handleSort={handleSort}
                        />
                    })}
                </ul>
                :
                <div className={styles['no-tasks']}>Нет задач</div>
            }
        </div>
    );
};

export default TaskList;