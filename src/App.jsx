import React, { useEffect, useState } from 'react';
import { dbUrl } from './config';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformedData = (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
    }

    setTasks(loadedTasks);
  };

  const { sendRequest, isLoading, error } = useHttp({ url: `${dbUrl}tasks.json` }, transformedData);

  useEffect(() => {
    sendRequest();
  }, []);

  const taskAddHandler = (task) => {
    // setTasks((prevTasks) => prevTasks.concat(task));
    sendRequest();
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks items={tasks} loading={isLoading} error={error} onFetch={sendRequest} />
    </React.Fragment>
  );
}

export default App;
