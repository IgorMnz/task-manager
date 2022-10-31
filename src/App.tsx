import React, {FC} from 'react';
import Layout from "./layouts/Layout";
import TaskListContextProvider from "./context/TaskListContext";
import MainPage from "./components/pages/main-page/MainPage";
import AppRouter from "./router/AppRouter";


const App: FC = () => {
    return (
        <TaskListContextProvider>
            <AppRouter/>
        </TaskListContextProvider>
    );
};

export default App;