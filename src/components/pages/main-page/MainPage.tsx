import React, {FC} from 'react';
import styles from "./mainPage.module.scss"
import TaskList from "../../common/task-list/TaskList";
import AddForm from "../../ui/forms/AddForm";

const MainPage: FC = () => {
    return (
        <main className={styles.wrapper}>
            <TaskList/>
            <AddForm/>
        </main>
    );
};

export default MainPage;