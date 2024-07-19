import React, {useState} from "react";
import './styles/App.css'
import Categories from "./components/Categories/Categories";
import Tasks from "./components/Tasks/Tasks";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {

	const [tasks, setTasks] = useState([
		{id: 0, taskTitle: 'smth', categoryName: "Main", checkedStatus: false},
		{id: 1, taskTitle: 'smth2', categoryName: "Test2", checkedStatus: false},
		{id: 2, taskTitle: 'smth3', categoryName: "Test3", checkedStatus: false},
	])

	const [categories, setCategories] = useState([
		...new Set(tasks.map((task) => task.categoryName))
	]);

	const [selectedCategory, setSelectedCategory] = useState("Main")

	const createTask = (task) => {
		setTasks([...tasks, task])
	}

	const deleteTask = (task) => {
		const filteredTasks = [...tasks].filter((obj) => obj.id !== task.id)
		setTasks([...filteredTasks])
	}

	const checkTask = (task) => {
		const tasksCopy = [...tasks]
		const desiredObjectIndex = tasksCopy.findIndex((obj) => obj.id === task.id)
		tasksCopy[desiredObjectIndex].checkedStatus = !tasksCopy[desiredObjectIndex].checkedStatus
		setTasks(tasksCopy)
	}

	const changeCategory = (category) => {
		setSelectedCategory(category)
	}

	const createCategory = (category) => {
		setCategories([...categories, category])
	}

	const deleteCategory = (category) => {
		if (selectedCategory === category) {
			setSelectedCategory("Main")
		}

		setTasks(tasks.filter((item) => item.categoryName !== category))
		setCategories(categories.filter((item) => item !== category))
	}

	return (
		<div className="App">

			<Categories
				tasks={tasks}
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
				changeCategory={changeCategory}
				createCategory={createCategory}
				deleteCategory={deleteCategory}
			/>


			<Tasks
				selectedCategory={selectedCategory}
				tasks={tasks}
				setTasks={setTasks}
				createTask={createTask}
				checkTask={checkTask}
				deleteTask={deleteTask}
			/>
		</div>
	);
}

export default App;
