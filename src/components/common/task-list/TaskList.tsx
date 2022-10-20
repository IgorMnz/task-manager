import React, {FC, useEffect, useState} from 'react';
import styles from "./taskList.module.scss"
import MenuBar from "../menu-bar/MenuBar";
import {ReactComponent as VisibleSvg} from '../../../assets/icons/visible.svg'
import FilterBar from "../filter-bar/FilterBar";

const TaskList: FC = () => {

    const [scroll, setScroll] = useState<boolean>(false)

    const scrollCheck = () => {
        const block: HTMLElement | null = document.getElementById('block')
        if (block !== null) {
            const isScroll: boolean = block.scrollHeight > block.clientHeight
            isScroll ? setScroll(true) : setScroll(false)
        }
    }

    useEffect(() => {
        scrollCheck()
    }, [scroll])

    return (
        <div className={styles.wrapper}>
            <MenuBar/>
            <FilterBar/>
            {scroll && <div className={styles['shadow-box']}></div>}
            <ul id='block' className={styles['task-list']}>
                <li>
                    <div className={styles.item}>
                        <div className={styles.check}>
                            <label htmlFor="1">
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    id="1"
                                    name="item"
                                />
                                <span className={styles['custom-checkbox']}></span>
                            </label>
                        </div>
                        <div className={styles.title}>
                            Элемент #1
                        </div>
                        <div className={styles.description}>
                            Описание элемента #1
                        </div>
                        <div className={styles.time}>
                            1.25
                        </div>
                        <div className={styles.visible}>
                            <VisibleSvg/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default TaskList;