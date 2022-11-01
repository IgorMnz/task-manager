import React, {FC, useContext, useEffect, useRef} from 'react';
import styles from "./taskList.module.scss"
import MenuBar from "../menu-bar/MenuBar";
import SortBar from "../sort-bar/SortBar";
import TaskListItem from "../task-list-item/TaskListItem";
import {TaskListContext} from "../../../context/TaskListContext";
import {useScroll} from "../../../hooks/useScroll";

const TaskList: FC = () => {

    const {tasks, setTasks, filterTasks, searchTask, term, filter} = useContext(TaskListContext)

    const {scroll, scrollCheck} = useScroll()

    useEffect(() => {
        scrollCheck()
    }, [scroll, tasks])

    // Записываем в переменную список отфильтрованных по фильтрам или поиску задач
    const visibleData = filterTasks(searchTask(tasks, term), filter);

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