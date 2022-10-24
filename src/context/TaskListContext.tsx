import {createContext, FC, ReactNode, useState} from "react";
import {ITasks} from "../types/ITasks";
import {v4 as uuidv4} from 'uuid';


interface IContextProps {
    tasks: ITasks[];
    addTask: (title: string, description: string, time: number, visible: boolean, checked: boolean) => any;
    handleCheck: (id: string) => any;
    handleRemove: () => any;
}

interface Props {
    children: ReactNode;
}

export const TaskListContext = createContext({} as IContextProps)

const TaskListContextProvider: FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<ITasks[]>([
        {id: "1", title: 'Элемент #1', description: 'Описание элемента #1', time: 1.25, visible: true, checked: false},
        {id: "2", title: 'Элемент #2', description: 'Описание элемента #2', time: 1.25, visible: true, checked: false},
        {id: "3", title: 'Элемент #3', description: 'Описание элемента #3', time: 1.25, visible: false, checked: false},
        {id: "4", title: 'Элемент #4', description: 'Описание элемента #4', time: 1.25, visible: false, checked: false},
        {id: "5", title: 'Элемент #5', description: 'Описание элемента #5', time: 1.25, visible: true, checked: false},

    ])

    const addTask = (title: string, description: string, time: number, visible: boolean, checked: boolean) => {
        setTasks([...tasks, {id: uuidv4(), title, description, time, visible, checked}])
    }

    const handleCheck = (id: string) => {
        const copyTasks = [...tasks];
        const modifiedTasks = copyTasks.map((task) => {
            if (id === task.id) {
                task.checked = !task.checked;
            }

            return task;
        });

        setTasks(modifiedTasks);
    };

    const handleRemove = () => {
        const copyTasks = [...tasks];
        const modifiedTasks = copyTasks.filter(
            (task) => task.checked !== true
        );
        setTasks(modifiedTasks);
    };

    // const handleCheckbox = (e: any, id: string) => {
    //     let value: boolean = e.target.checked;
    //     setTasks(
    //         tasks.map(task => {
    //             if (task.id === id) {
    //                 task.checked = value;
    //             }
    //             return task;
    //         }))
    // }
    //
    // const deleteCheckedTasks = () => {
    //     let arrayIds: any[] = [];
    //     tasks.forEach(task => {
    //         if (task.checked) {
    //             arrayIds.push(task.id);
    //         }
    //     });
    //
    //     arrayIds.forEach((item: string) => {
    //         setTasks(tasks.filter(task => task.id !== item))
    //     })
    // }

    return (
        <TaskListContext.Provider value={{
            tasks,
            addTask,
            handleCheck,
            handleRemove
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;