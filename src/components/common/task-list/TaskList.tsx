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
                    <label htmlFor="1" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="1"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="2" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="2"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="3" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="3"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="4" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="4"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="5" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="5"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="6" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="6"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="7" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="7"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="8" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="8"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
                <li>
                    <label htmlFor="9" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="9"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>

                <li>
                    <label htmlFor="10" className={styles.item}>
                        <div className={styles.check}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                id="10"
                                name="item"
                            />
                            <span className={styles['custom-checkbox']}></span>
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
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default TaskList;