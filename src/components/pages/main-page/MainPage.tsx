import React, {FC} from 'react';
import styles from "../../../layouts/layout.module.scss"
import TaskList from "../../common/task-list/TaskList";
import AddForm from "../../ui/forms/AddForm";

const MainPage: FC = () => {
    return (
        <div className={styles.main}>
            <TaskList/>
            <AddForm/>
        </div>
    );
};

export default MainPage;