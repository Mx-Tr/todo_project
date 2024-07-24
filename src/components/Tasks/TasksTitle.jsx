import React from 'react';

const TasksTitle = ({ selectedCategory }) => {
  return (
    <h1 className={'tasks__title'}>
      {selectedCategory === 'Main' ? 'Main tasks' : selectedCategory}
    </h1>
  );
};

export default TasksTitle;