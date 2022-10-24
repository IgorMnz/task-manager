import React, {FC, useContext} from 'react';
import styles from "./menuBar.module.scss"
import MyButton from "../../ui/buttons/MyButton";
import SearchBar from "../search-bar/SearchBar";
import {ReactComponent as PlusSvg} from '../../../assets/icons/plus.svg'
import {ReactComponent as DelSvg} from '../../../assets/icons/delete.svg'
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import {ReactComponent as NotVisibleSvg} from '../../../assets/icons/not-visible.svg'
import {TaskListContext} from "../../../context/TaskListContext";

const MenuBar: FC = () => {

    const {addTask, handleRemove} = useContext(TaskListContext)

    const defaultValues = {
        title: "Заголовок",
        description: "Описание",
        time: 1,
        visible: true
    }

    const handleAdding = () => {
        addTask('Заголовок', 'Описание', 1, true, false)
    }

    return (
        <div className={styles.menu}>
            <MyButton variant='menu_primary' onClick={handleAdding}>
                <PlusSvg/>
            </MyButton>
            <MyButton variant='menu_secondary' onClick={() => handleRemove()}>
                <DelSvg/>
            </MyButton>
            <SearchBar/>
            <MyButton variant='menu_primary'>
                <VisibleSvg/>
            </MyButton>
            <MyButton variant='menu_secondary'>
                <NotVisibleSvg/>
            </MyButton>
        </div>
    );
};

export default MenuBar;