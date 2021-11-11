import ITasks from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
	tasks: ITasks[];
	selectTask: (selectedTask: ITasks) => void;
}

function List({ tasks, selectTask }: Props) {
	return (
		<aside className={style.listaTarefas}>
			<h2>Studies of the day</h2>
			<ul>
				{tasks.map(taskItem => (
					<Item selectTask={selectTask} key={taskItem.id} {...taskItem} />
				))}
			</ul>
		</aside>
	);
}

export default List;
