import React from 'react';
import CategoriesForm from "./CategoriesForm";
import CategoriesList from "./CategoriesList";
import MyModal from "../UI/MyModal/MyModal";
import MainInput from "../UI/MainInput/MainInput";

const Categories = ({tasks, categories,createCategory, changeCategory, deleteCategory, selectedCategory}) => {
	return (
		<div className={"categories"}>

			<MyModal visible={false}>
				<MainInput></MainInput>
			</MyModal>
			<CategoriesForm
				createCategory={createCategory}
			/>

			<CategoriesList
				tasks={tasks}
				categories={categories}
				selectedCategory={selectedCategory}
				changeCategory={changeCategory}
				deleteCategory={deleteCategory}
			/>
		</div>
	);
};

export default Categories;