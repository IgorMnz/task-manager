import React, {FC} from 'react';
import styles from "./page401.module.scss"
import MyButton from "../../ui/buttons/MyButton";
import {Link} from "react-router-dom";

const Page401: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>Ошибка 401. Вы не авторизованы..</div>
            <div className={styles.button}>
                <Link to={'/'}>
                    <MyButton>На Главную</MyButton>
                </Link>
            </div>


        </div>
    );
};

export default Page401;