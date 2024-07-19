import React from 'react';
import TasksTitle from "./TasksTitle";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";

const Tasks = ({selectedCategory, tasks, setTasks, createTask, deleteTask ,checkTask}) => {

	return (
		<div className={"tasks"}>

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
				setTasks={setTasks}
				deleteTask={deleteTask}
				checkTask={checkTask}
			/>

		</div>
	);
};

export default Tasks;