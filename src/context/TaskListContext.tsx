import {createContext, FC, ReactNode, useState} from "react";
import {ITasks} from "../types/ITasks";
import {v4 as uuidv4} from 'uuid';


interface IContextProps {
    tasks: ITasks[];
    addTask: (title: string, description: string, time: number, visible: boolean) => any
}

interface Props {
    children: ReactNode;
}

export const TaskListContext = createContext({} as IContextProps)

const TaskListContextProvider: FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<ITasks[]>([
        {id: "1", title: 'Элемент #1', description: 'Описание элемента #1', time: 1.25, visible: true},
        {id: "2", title: 'Элемент #2', description: 'Описание элемента #2', time: 1.25, visible: true},
        {id: "3", title: 'Элемент #3', description: 'Описание элемента #3', time: 1.25, visible: false},
        {id: "4", title: 'Элемент #4', description: 'Описание элемента #4', time: 1.25, visible: false},
        {id: "5", title: 'Элемент #5', description: 'Описание элемента #5', time: 1.25, visible: true},

    ])

    const addTask = (title: string, description: string, time: number, visible: boolean) => {
        setTasks([...tasks, {id: uuidv4(), title, description, time, visible}])
    }

    return (
        <TaskListContext.Provider value={{tasks, addTask}}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;