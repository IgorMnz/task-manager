import React, {FC} from 'react';
import Header from "../components/common/header/Header";
import MainPage from "../components/pages/main-page/MainPage";

const Main: FC = () => {
    return (
        <>
            <Header/>
            <MainPage/>
        </>
    );
};

export default Main;