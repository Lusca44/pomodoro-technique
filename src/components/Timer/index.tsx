import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";
import timeForSeconds from "../../common/utils/time";
import ITasks from "../../types/task";
import { useEffect, useState } from "react";

interface Props {
	selected: ITasks | undefined;
	endTaks: () => void;
}

export default function Timer({ selected, endTaks }: Props) {
	const [time, setTime] = useState<number>();

	useEffect(() => {
		if (selected?.time) {
			setTime(timeForSeconds(selected.time));
		}
	}, [selected]);

	function timeRegress(counter: number = 0) {
		setTimeout(() => {
			if (counter > 0) {
				setTime(counter - 1);
				return timeRegress(counter - 1);
			}
			endTaks();
		}, 1000);
	}

	return (
		<div className={style.cronometro}>
			<p className={style.titulo}>Select a card and init the timer</p>
			<div className={style.relogioWrapper}>
				<Watch time={time} />
			</div>
			<Button
				onClick={() => {
					timeRegress(time);
				}}
			>
				Init
			</Button>
		</div>
	);
}
