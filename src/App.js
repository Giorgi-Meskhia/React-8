import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };


  const moveTask = (from, to, index) => {
    const lists = { todo: todos, inProgress, done };
    const setLists = { todo: setTodos, inProgress: setInProgress, done: setDone };

    const taskToMove = lists[from][index];
    setLists[from](lists[from].filter((_, i) => i !== index));
    setLists[to]([...lists[to], taskToMove]);
  };

  const deleteTask = (index) => {
    setDone(done.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>Task Manager (3 Columns)</h2>
      <TaskInput task={task} setTask={setTask} addTask={addTask} />
      <TaskList
  todos={todos}
  inProgress={inProgress}
  done={done}
  moveTask={moveTask}
  deleteTask={deleteTask}
/>

    </div>
  );
};

const styles = {
  container: {
    padding: 30,
    fontFamily: 'sans-serif',
  },
};

export default App;

