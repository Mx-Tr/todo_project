import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Categories from './components/Categories/Categories';
import Tasks from './components/Tasks/Tasks';


function App() {

  const loadTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [
      { id: 0, taskTitle: 'Initial task', categoryName: 'Main', checkedStatus: false },
    ];
  };

  const loadCategoriesFromLocalStorage = () => {
    const storedCategories = localStorage.getItem('categories');
    return storedCategories ? JSON.parse(storedCategories) : ['Main'];
  };

  const loadSelectedCategoryFromLocalStorage = () => {
    const storedSelectedCategory = localStorage.getItem('selectedCategory');
    return storedSelectedCategory ? JSON.parse(storedSelectedCategory) : 'Main';
  };

  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());
  const [categories, setCategories] = useState(loadCategoriesFromLocalStorage());
  const [selectedCategory, setSelectedCategory] = useState(loadSelectedCategoryFromLocalStorage());

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
  }, [selectedCategory]);


  return (
    <div className="App">

      <Categories
        tasks={tasks}
        setTasks={setTasks}
        categories={categories}
        setCategories={setCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}

      />

      <Tasks
        selectedCategory={selectedCategory}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
