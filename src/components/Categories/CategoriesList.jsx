import React from 'react';
import CategoriesListItem from './CategoriesListItem';

const CategoriesList = ({
                          categories,
                          selectedCategory,
                          changeCategory,
                          deleteCategory,
                          modalVisibility,
                          setModalVisibility,
                        }) => {
  return (
    <ul className={'categories__list'}>

      {categories.map((category, index) => {
        return (
          <CategoriesListItem
            category={category}
            selectedCategory={selectedCategory}
            deleteCategory={deleteCategory}
            changeCategory={changeCategory}
            key={index}
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
          >
            {category}
          </CategoriesListItem>
        );
      })}

    </ul>
  );
};

export default CategoriesList;