import React, { useState } from 'react';
import MainButton from '../UI/MainButton/MainButton';
import MainInput from '../UI/MainInput/MainInput';

const TasksForm = ({
                     createTask,
                     selectedCategory,
                   }) => {

  const [tempTask, setTempTask] = useState({ taskTitle: '' });
  const [isError, setIsError] = useState(false);

  function addNewTask(e) {
    e.preventDefault();
    if (!tempTask.taskTitle) {
      setIsError(true);
      return;
    }
    createTask({ id: Date.now(), taskTitle: tempTask.taskTitle, categoryName: selectedCategory, checkedStatus: false });
    setTempTask({ taskTitle: '' });
  }

  return (
    <form className={'tasks__form'}>

      <MainInput
        style={{
          marginRight: '2rem',
          border: isError || tempTask.taskTitle.length === 75 ? '1px solid red' : 'none',
        }}
        type="text"
        placeholder="Add a new task"
        maxLength={75}
        value={tempTask.taskTitle}
        onChange={(e) => {
          setTempTask({ taskTitle: e.target.value });
          setIsError(false);
        }}
      />
      <MainButton onClick={addNewTask}>
        Add
      </MainButton>

    </form>
  );
};

export default TasksForm;