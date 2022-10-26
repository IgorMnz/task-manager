import {createContext, FC, ReactNode, useState} from "react";
import {ITasks} from "../types/ITasks";
import {v4 as uuidv4} from 'uuid';


interface IContextProps {
    tasks: ITasks[];
    addTask: (title: string, description: string, time: string, visible: boolean, checked: boolean) => void;
    handleCheck: (id?: string) => void;
    handleRemove: () => void;
    checked: boolean;
    findItem: (id?: string) => void;
    editTask: (title: string, description: string, time: string, visible: boolean, checked: boolean, id?: string) => void;
    editItem: ITasks | undefined | null;
    onUpdateSearch: (term: string) => void;
    filter: string;
    term: string;
    onFilterSelect: (filter: string) => void;
    searchTask: (tasks: ITasks[], term: string) => ITasks[];
    filterTasks: (tasks: ITasks[], filter: string) => ITasks[];
    handleChangeSearch: (e: any) => void;
}

interface Props {
    children: ReactNode;
}

export const TaskListContext = createContext({} as IContextProps)

const TaskListContextProvider: FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<ITasks[]>([
        {
            id: "1",
            title: 'Элемент 1',
            description: 'Описание элемента 1',
            time: "1.50",
            visible: true,
            checked: false
        },
        {
            id: "2",
            title: 'Элемент 2',
            description: 'Описание элемента 2',
            time: "1.25",
            visible: true,
            checked: false
        },
        {
            id: "3",
            title: 'Элемент 3',
            description: 'Описание элемента 3',
            time: "1.0",
            visible: false,
            checked: false
        },
        {
            id: "4",
            title: 'Элемент 4',
            description: 'Описание элемента 4',
            time: "0.75",
            visible: false,
            checked: false
        },
        {
            id: "5",
            title: 'Элемент 5',
            description: 'Описание элемента 5',
            time: "0.50",
            visible: true,
            checked: false
        },
    ])

    const [checked, setChecked] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<ITasks | undefined | null>(null)
    const [term, setTerm] = useState<string>('')
    const [filter, setFilter] = useState('all')

    const addTask = (title: string, description: string, time: string, visible: boolean, checked: boolean) => {
        const item = {id: uuidv4(), title, description, time, visible, checked}
        setTasks([...tasks, item])
        setEditItem(item)
    }

    const handleCheck = (id?: string) => {
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

    const findItem = (id?: string) => {
        const item: ITasks | undefined = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    const editTask = (title: string, description: string, time: string, visible: boolean, checked: boolean, id?: string) => {
        const newTasks = tasks.map(task => (task.id === id) ? {title, description, time, visible, checked, id} : task)

        setTasks(newTasks)
    }

    const searchTask = (tasks: ITasks[], term: string) => {
        if (term.length === 0) {
            return tasks;
        } else if (term[0] === ">") {
            return tasks.filter(item => {
                return item.time > term.slice(1)
            })
        } else if (term[0] === "<") {
            return tasks.filter(item => {
                return item.time < term.slice(1)
            })
        } else if (term[0] === "=") {
            return tasks.filter(item => {
                return item.time == term.slice(1)
            })
        } else if (term.slice(0, 2) === "!=") {
            return tasks.filter(item => {
                return item.time != term.slice(2)
            })
        } else if (term.slice(0, 2) === ">=") {
            return tasks.filter(item => {
                return item.time >= term.slice(2)
            })
        } else if (term.slice(0, 2) === "<=") {
            return tasks.filter(item => {
                return item.time <= term.slice(2)
            })
        } else
            return tasks.filter(item => {
                return (
                    item.title.toLowerCase().includes(term.toLowerCase()) ||
                    item.description.toLowerCase().includes(term.toLowerCase())
                )
            })
    }

    const onUpdateSearch = (term: string) => {
        setTerm(term)
    }

    const handleChangeSearch = (e: any) => {
        const term = e.target.value;
        setTerm(term)
        onUpdateSearch(term)
    }

    const filterTasks = (tasks: ITasks[], filter: string) => {
        switch (filter) {
            case 'visible':
                return tasks.filter((task: ITasks) => task.visible);
            case 'no-visible':
                return tasks.filter((task: ITasks) => !task.visible);
            case 'all':
                return tasks;
            default:
                return tasks
        }
    }

    const onFilterSelect = (filter: string) => {
        setFilter(filter)
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
            editItem,
            onUpdateSearch,
            filter,
            term,
            onFilterSelect,
            searchTask,
            filterTasks,
            handleChangeSearch
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;