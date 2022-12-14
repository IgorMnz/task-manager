import React, {FC, useContext, useState} from 'react';
import styles from "./sortBar.module.scss";
import {ReactComponent as CheckboxSvg} from "../../../assets/icons/checkbox.svg";
import {ReactComponent as ArrowUpSvg} from "../../../assets/icons/arrow-up.svg";
import {ReactComponent as ArrowDownSvg} from "../../../assets/icons/arrow-down.svg";
import {ReactComponent as TimeSvg} from "../../../assets/icons/Time.svg";
import {ReactComponent as VisibleSvg} from "../../../assets/icons/visible.svg";
import {TaskListContext} from "../../../context/TaskListContext";

const SortBar: FC = () => {

    const {sortByTitle, sortByTime} = useContext(TaskListContext)

    const [titleOrder, setTitleOrder] = useState<boolean>(false)
    const [timeOrder, setTimeOrder] = useState<boolean>(false)

    // Функция, которая проверяет применена ли сортировка для поля title и устанавливает соответствующее состояние
    const sortTitle = () => {
        sortByTitle()
        setTitleOrder(!titleOrder)
    }

    // Функция, которая проверяет применена ли сортировка для поля time и устанавливает соответствующее состояние
    const sortTime = () => {
        sortByTime()
        setTimeOrder(!timeOrder)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.checkbox}>
                <CheckboxSvg/>
            </div>
            <div className={styles.title} onClick={sortTitle}>
                <div>Название</div>
                {titleOrder ? <ArrowUpSvg/> : <ArrowDownSvg/>}
            </div>
            <div className={styles.description}>
                <div>Описание</div>
            </div>
            <div className={styles.time} onClick={sortTime}>
                <TimeSvg/>
                {timeOrder ? <ArrowUpSvg/> : <ArrowDownSvg/>}
            </div>
            <div className={styles.visible}>
                <VisibleSvg/>
            </div>
        </div>
    );
};

export default SortBar;