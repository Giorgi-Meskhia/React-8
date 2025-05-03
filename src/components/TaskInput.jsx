import React from 'react';

const TaskInput = ({ task, setTask, addTask }) => {
  return (
    <div style={styles.inputContainer}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="ახალი დავალება"
        style={styles.input}
      />
      <button onClick={addTask} style={styles.addButton}>დამატება</button>
    </div>
  );
};

const styles = {
  inputContainer: {
    display: 'flex',
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  addButton: {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default TaskInput;
