import React from 'react';
import MainButton from "../UI/MainButton/MainButton";
import imgPath from '../imgs/pen.png'

const CategoriesListItem = ({category, selectedCategory, deleteCategory, changeCategory, children}) => {
	return (

		<li className={`categories__list-item ${category === selectedCategory ? "selected" : ""}`}>
			<p onClick={() => changeCategory(category)}>{children}</p>

			{
				category !== "Main"
					?
					<>
						<MainButton onClick={() => deleteCategory(category)} style={{marginRight: "1rem"}}>
							X
						</MainButton>
						<img
							style={{
								background: "",
								height: "15px",
								width: "15px"
							}}
							src={imgPath}

						>

						</img>
					</>
					:
					<></>
			}


		</li>


	);
};

export default CategoriesListItem;