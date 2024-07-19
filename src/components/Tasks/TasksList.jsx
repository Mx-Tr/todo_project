import React from 'react';
import TasksListItem from "./TasksListItem";

const TasksList = ({tasks, selectedCategory, setTasks, deleteTask, checkTask}) => {

	return (
		<ul className={"tasks__list"}>

			{tasks.map((task) => {
				if (task.categoryName === selectedCategory) {
					return <TasksListItem task={task} setTasks={setTasks} deleteTask={deleteTask} checkTask={checkTask} key={task.id}/>
				}
			})
			}

		</ul>
	);
};

export default TasksList;