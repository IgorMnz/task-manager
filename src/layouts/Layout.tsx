import React, {FC} from 'react';
import Header from "../components/common/header/Header";
import styles from "./layout.module.scss"

interface LayoutProps {
    children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
};

export default Layout;