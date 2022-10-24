import React, {FC} from 'react';
import Main from "./layouts/Main";
import TaskListContextProvider from "./context/TaskListContext";


const App: FC = () => {
    return (
        <TaskListContextProvider>
            <Main/>
        </TaskListContextProvider>
    );
};

export default App;