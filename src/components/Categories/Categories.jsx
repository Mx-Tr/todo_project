import React, { useState } from 'react';
import CategoriesForm from './CategoriesForm';
import CategoriesList from './CategoriesList';
import MyModal from '../UI/MyModal/MyModal';
import ChangeCategoryNameForm from './ChangeCategoryNameForm';

const Categories = ({
                      tasks,
                      setTasks,
                      categories,
                      setCategories,
                      selectedCategory,
                      setSelectedCategory,
                    }) => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const changeCategory = (category) => {
    setSelectedCategory(category);
  };

  const createCategory = (category) => {
    setCategories([...categories, category]);
  };

  const deleteCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('Main');
    }

    setTasks(tasks.filter((item) => item.categoryName !== category));
    setCategories(categories.filter((item) => item !== category));
  };

  const changeCategoryName = (category, newCategoryName) => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      if (task.categoryName === category) {
        task.categoryName = newCategoryName;
      }
    });

    const categoriesCopy = [...categories.map((item) => {
      if (item === category) {
        return newCategoryName;
      }
      return item;
    })];

    setSelectedCategory(newCategoryName);
    setTasks([...tasksCopy]);
    setCategories([...categoriesCopy]);
    setModalVisibility(false);
  };

  return (
    <div className={'categories'}>

      <MyModal
        visible={modalVisibility}
        setVisible={setModalVisibility}
        style={{}}
      >
        <ChangeCategoryNameForm
          selectedCategory={selectedCategory}
          changeCategoryName={changeCategoryName}
          modalVisibility={modalVisibility}
        />
      </MyModal>

      <CategoriesForm
        categories={categories}
        createCategory={createCategory}
      />

      <CategoriesList
        tasks={tasks}
        categories={categories}
        selectedCategory={selectedCategory}
        changeCategory={changeCategory}
        deleteCategory={deleteCategory}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </div>
  );
};

export default Categories;