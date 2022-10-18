import React, {FC} from 'react';
import styles from "./filterBar.module.scss";
import {ReactComponent as CheckboxSvg} from "../../../assets/icons/checkbox.svg";
import {ReactComponent as ArrowUpSvg} from "../../../assets/icons/arrow-up.svg";
import {ReactComponent as TimeSvg} from "../../../assets/icons/Time.svg";
import {ReactComponent as VisibleSvg} from "../../../assets/icons/visible.svg";

const FilterBar: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.checkbox}>
                <CheckboxSvg/>
            </div>
            <div className={styles.title}>
                <div>Название</div>
                <ArrowUpSvg/>
            </div>
            <div className={styles.description}>
                <div>Описание</div>
            </div>
            <div className={styles.time}>
                <TimeSvg/>
                <ArrowUpSvg/>
            </div>
            <div className={styles.visible}>
                <VisibleSvg/>
            </div>
        </div>
    );
};

export default FilterBar;