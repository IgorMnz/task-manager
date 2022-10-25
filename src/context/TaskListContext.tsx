import {createContext, FC, ReactNode, useState} from "react";
import {ITasks} from "../types/ITasks";
import {v4 as uuidv4} from 'uuid';


interface IContextProps {
    tasks: ITasks[];
    addTask: (title: string, description: string, time: number, visible: boolean, checked: boolean) => void;
    handleCheck: (id: string) => void;
    handleRemove: () => void;
    checked: boolean;
    findItem: (id: string) => void;
    editTask: (title: string, description: string, time: number, visible: boolean, checked: boolean, id: string) => void;
    editItem: ITasks | undefined | null
}

interface Props {
    children: ReactNode;
}

export const TaskListContext = createContext({} as IContextProps)

const TaskListContextProvider: FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<ITasks[]>([
        {id: "1", title: 'Элемент #1', description: 'Описание элемента #1', time: 1.50, visible: true, checked: false},
        {id: "2", title: 'Элемент #2', description: 'Описание элемента #2', time: 1.25, visible: true, checked: false},
        {id: "3", title: 'Элемент #3', description: 'Описание элемента #3', time: 1.0, visible: false, checked: false},
        {id: "4", title: 'Элемент #4', description: 'Описание элемента #4', time: 0.75, visible: false, checked: false},
        {id: "5", title: 'Элемент #5', description: 'Описание элемента #5', time: 0.50, visible: true, checked: false},
    ])

    const [checked, setChecked] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<ITasks | undefined | null>(null)

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
        let arr: ITasks[] = []
        modifiedTasks.forEach(item => {
            if (item.checked) {
                arr.push(item)
            }
        })
        if (arr.length > 0) {
            setChecked(true)
        } else {
            setChecked(false)
        }
    };

    const handleRemove = () => {
        const copyTasks = [...tasks];
        const modifiedTasks = copyTasks.filter(
            (task) => !task.checked
        );
        setChecked(false);
        setTasks(modifiedTasks);
    };

    const findItem = (id: string) => {
        const item: ITasks | undefined = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    const editTask = (title: string, description: string, time: number, visible: boolean, checked: boolean, id: string) => {
        const newTasks = tasks.map(task => (task.id === id) ? {title, description, time, visible, checked, id} : task)

        setTasks(newTasks)
    }

    return (
        <TaskListContext.Provider value={{
            tasks,
            addTask,
            handleCheck,
            handleRemove,
            checked,
            findItem,
            editTask,
            editItem
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;