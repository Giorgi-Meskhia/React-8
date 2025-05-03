import React from 'react';

const TaskList = ({ todos, inProgress, done, moveTask, deleteTask }) => {
  const renderTasks = (tasks, column) => {
    return tasks.map((task, index) => (
      <div key={index} style={styles.task}>
        <span>{task}</span>
        <div>
          {column !== 'todo' && (
            <button onClick={() => moveTask(column, 'todo', index)} style={styles.button}>← დაბრუნება</button>
          )}
          {column !== 'inProgress' && (
            <button onClick={() => moveTask(column, 'inProgress', index)} style={styles.button}>⇄ დაწყება</button>
          )}
          {column !== 'done' && (
            <button onClick={() => moveTask(column, 'done', index)} style={styles.button}>→ დასწრულება</button>
          )}
          {column === 'done' && (
            <button onClick={() => deleteTask(index)} style={{ ...styles.button, backgroundColor: '#e74c3c' }}>წაშლა</button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div style={styles.columns}>
      <div style={styles.column}>
        <h3>To Do</h3>
        {renderTasks(todos, 'todo')}
      </div>

      <div style={styles.column}>
        <h3>In Progress</h3>
        {renderTasks(inProgress, 'inProgress')}
      </div>

      <div style={styles.column}>
        <h3>Done</h3>
        {renderTasks(done, 'done')}
      </div>
    </div>
  );
};

const styles = {
  columns: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
  },
  column: {
    width: '32%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  task: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginLeft: 5,
    padding: '5px 8px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
};

export default TaskList;

