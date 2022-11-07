import {ChangeEvent, createContext, FC, ReactNode, useEffect, useState} from "react";
import {IContextProps, ITasks} from "../types/types";
import {v4 as uuidv4} from 'uuid';
import {useHttp} from "../hooks/useHttp";

interface Props {
    children: ReactNode;
}

export const TaskListContext = createContext({} as IContextProps)

const TaskListContextProvider: FC<Props> = ({children}) => {
    const [tasks, setTasks] = useState<ITasks[]>([])

    const [checked, setChecked] = useState<boolean>(false);
    const [editItem, setEditItem] = useState<ITasks | undefined | null>(null)
    const [term, setTerm] = useState<string>('')
    const [filter, setFilter] = useState('all')
    const [order, setOrder] = useState('DSC')
    const [sorted, setSorted] = useState({sorted: 'time', reversed: false})

    const {request} = useHttp()

    useEffect(() => {
        request("https://635f96b6ca0fe3c21a9f8c08.mockapi.io/tasks")
            .then((data: ITasks[]) => setTasks(data))
            .catch((error) => console.log(error))
    }, []);

    // Функция для добавления новой задачи в список задач
    const addTask = (title: string, description: string, time: string, visible: boolean, checked: boolean) => {
        const item = {id: uuidv4(), title, description, time, visible, checked}
        setTasks([...tasks, item])
        setEditItem(item)
    }

    // Функция для установки чекбокса для каждой отдельной задачи и выбора нескольких задач с помощью чекбокса
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

    // Функция для удаления задачи/задач, выбранных чекбоксом
    const handleRemove = () => {
        const copyTasks = [...tasks];
        const modifiedTasks = copyTasks.filter(
            (task) => !task.checked
        );
        setChecked(false);
        setTasks(modifiedTasks);
    };

    // Функция для поиска выбранной (активной) задачи
    const findItem = (id?: string) => {
        const item: ITasks | undefined = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    // Функция для редактирования выбранной (активной) задачи
    const editTask = (title: string, description: string, time: string, visible: boolean, checked: boolean, id?: string) => {
        const newTasks = tasks.map(task => (task.id === id) ? {title, description, time, visible, checked, id} : task)

        setTasks(newTasks)
    }

    /*Функция для поиска задачи по определенным критериям.
    Текстовый поиск осуществляется по полям title и description.
    Поиск по полю time осуществляется строкой [оператор сравнения][число]
    */
    const searchTask = (tasks: ITasks[], term: string) => {
        if (term.length === 0) {
            return tasks;
        } else if (term.slice(0, 2) === "<=") {
            return tasks.filter(item => {
                return Number(item.time) <= Number(term.slice(2))
            })
        } else if (term.slice(0, 2) === ">=") {
            return tasks.filter(item => {
                return Number(item.time) >= Number(term.slice(2))
            })
        } else if (term[0] === ">") {
            return tasks.filter(item => {
                return Number(item.time) > Number(term.slice(1))
            })
        } else if (term[0] === "<") {
            return tasks.filter(item => {
                return Number(item.time) < Number(term.slice(1))
            })
        } else if (term[0] === "=") {
            return tasks.filter(item => {
                return Number(item.time) === Number(term.slice(1))
            })
        } else if (term.slice(0, 2) === "!=") {
            return tasks.filter(item => {
                return Number(item.time) !== Number(term.slice(2))
            })
        } else
            return tasks.filter(item => {
                return (
                    item.title.toLowerCase().includes(term.toLowerCase()) ||
                    item.description.toLowerCase().includes(term.toLowerCase())
                )
            })
    }

    // Функция по присваиванию поискового слова введенного в поисковом инпуте
    const onUpdateSearch = (term: string) => {
        setTerm(term)
    }

    // Функция для обработчика событий onChange для поискового инпута
    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setTerm(term)
        onUpdateSearch(term)
    }

    // Функция для фильтрации задачи по свойству visible
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

    // Функция для установки примененного фильтра
    const onFilterSelect = (filter: string) => {
        setFilter(filter)
    }

    //Функция для сортировки заголовка задач по возрастанию/по убыванию
    const sortByTitle = () => {
        setSorted({sorted: 'title', reversed: !sorted.reversed})
        const tasksCopy = [...tasks]
        tasksCopy.sort((titleA: any, titleB: any) => {
            const a = titleA.title
            const b = titleB.title

            if (sorted.reversed) {
                return b.localeCompare(a)
            }
            return a.localeCompare(b)
        })
        setTasks(tasksCopy)
    }

    //Функция для сортировки времени задач по возрастанию/по убыванию
    const sortByTime = () => {
        setSorted({sorted: 'time', reversed: !sorted.reversed})
        const tasksCopy = [...tasks]
        tasksCopy.sort((timeA: any, timeB: any) => {
            if (sorted.reversed) {
                return timeA.time - timeB.time
            }
            return timeB.time - timeA.time
        })
        setTasks(tasksCopy)
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
            handleChangeSearch,
            setTasks,
            sortByTime,
            sortByTitle
        }}>
            {children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider;