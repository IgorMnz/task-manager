import {ChangeEvent} from "react";

export interface ITasks {
    id?: string
    title: string
    description: string
    time: string
    visible: boolean
    checked: boolean
}

export interface IContextProps {
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
    handleChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    sortTasks: (col: string) => void;
}