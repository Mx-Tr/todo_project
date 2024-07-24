import React from 'react';
import MainButton from '../UI/MainButton/MainButton';

const TasksListItem = ({
                         task,
                         deleteTask,
                         checkTask,
                       }) => {
  return (

    <li className={`tasks__list__item ${task.checkedStatus ? 'completed' : ''}`} onClick={() => checkTask(task)}>

      <input type="checkbox" className={'tasks__list__item-checkbox'} checked={task.checkedStatus} readOnly />

      <p className={'tasks__list__item-title'}>
        {task.taskTitle}
      </p>

      <MainButton
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task);
        }}
      >
        X
      </MainButton>

    </li>

  );
};

export default TasksListItem;