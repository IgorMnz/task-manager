import React, {FC, useContext, useEffect, useState} from 'react';
import styles from "./menuBar.module.scss"
import MyButton from "../../ui/buttons/MyButton";
import SearchBar from "../search-bar/SearchBar";
import {ReactComponent as PlusSvg} from '../../../assets/icons/plus.svg'
import {ReactComponent as DelSvg} from '../../../assets/icons/delete.svg'
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'
import {TaskListContext} from "../../../context/TaskListContext";

const MenuBar: FC = () => {

    const [activeVisible, setActiveVisible] = useState(false)
    const [activeNoVisible, setActiveNoVisible] = useState(false)

    const {addTask, handleRemove, checked, onFilterSelect} = useContext(TaskListContext)

    const handleAdding = () => {
        addTask('Новая задача', 'Описание новой задачи', "1", true, false)
    }

    const visible = (filter: string) => {
        switch (filter) {
            case 'visible':
                setActiveVisible(!activeVisible)
                setActiveNoVisible(false)
                break
            case 'no-visible':
                setActiveNoVisible(!activeNoVisible)
                setActiveVisible(false)
                break
        }
    }

    useEffect(() => {
        if (activeVisible) {
            onFilterSelect('visible')
        } else if (activeNoVisible) {
            onFilterSelect('no-visible')
        } else {
            onFilterSelect('all')
        }
    }, [activeVisible, activeNoVisible])

    return (
        <div className={styles.menu}>
            <MyButton variant='menu_primary' onClick={handleAdding}>
                <PlusSvg/>
            </MyButton>
            <MyButton variant={checked ? 'menu_primary' : 'menu_secondary'} onClick={() => handleRemove()}>
                <DelSvg/>
            </MyButton>
            <SearchBar/>
            <MyButton
                variant={activeVisible ? 'menu_primary' : 'menu_secondary'}
                onClick={() => visible('visible')}
            >
                <VisibleSvg/>
            </MyButton>
            <MyButton
                variant={activeNoVisible ? 'menu_primary' : 'menu_secondary'}
                onClick={() => visible('no-visible')}
            >
                <NotVisibleSvg/>
            </MyButton>
        </div>
    );
};

export default MenuBar;