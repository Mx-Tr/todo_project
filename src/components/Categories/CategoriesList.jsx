import React from 'react';
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = ({tasks, categories, selectedCategory, changeCategory, deleteCategory}) => {
	return (
		<ul className={"categories__list"}>

			{categories.map((category, index) => {
				return (

					<CategoriesListItem
						category={category}
						selectedCategory={selectedCategory}
						deleteCategory={deleteCategory}
						changeCategory={changeCategory}
						key={index}
					>
						{category}
					</CategoriesListItem>
				)
			})}

		</ul>
	);
};

export default CategoriesList;