import React from 'react';
import TasksTitle from './TasksTitle';
import TasksForm from './TasksForm';
import TasksList from './TasksList';

const Tasks = ({
                 selectedCategory,
                 tasks,
                 setTasks,
               }) => {

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    const filteredTasks = [...tasks].filter((obj) => obj.id !== task.id);
    setTasks([...filteredTasks]);
  };

  const checkTask = (task) => {
    const tasksCopy = [...tasks];
    const desiredObjectIndex = tasksCopy.findIndex((obj) => obj.id === task.id);
    tasksCopy[desiredObjectIndex].checkedStatus = !tasksCopy[desiredObjectIndex].checkedStatus;
    setTasks(tasksCopy);
  };

  return (
    <div className={'tasks'}>

      <TasksTitle
        selectedCategory={selectedCategory}
      />

      <TasksForm
        createTask={createTask}
        selectedCategory={selectedCategory}
      />

      <TasksList
        tasks={tasks}
        selectedCategory={selectedCategory}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />

    </div>
  );
};

export default Tasks;