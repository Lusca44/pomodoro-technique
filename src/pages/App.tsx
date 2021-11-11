import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import ITasks from "../types/task";
import style from "./App.module.scss";

function App() {
	const [tasks, setTasks] = useState<ITasks[]>([]);
	const [selected, setSelected] = useState<ITasks>();

	function selectTask(taskSelected: ITasks) {
		setSelected(taskSelected);
		setTasks(oldTasks =>
			oldTasks.map(task => ({
				...task,
				selected: task.id === taskSelected.id ? true : false
			}))
		);
	}

	function endTaks() {
		if (selected) {
			setSelected(undefined);
			setTasks(oldTasks =>
				oldTasks.map(task => {
					if (task.id === selected.id) {
						return {
							...task,
							selected: false,
							completed: true
						};
					}
					return task;
				})
			);
		}
	}

	return (
		<div className={style.AppStyle}>
			<Form setTasks={setTasks} />
			<List tasks={tasks} selectTask={selectTask} />
			<Timer selected={selected} endTaks={endTaks} />
		</div>
	);
}

export default App;
