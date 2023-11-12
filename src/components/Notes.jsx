import { useState } from "react";
import Exercise from "./Exercise";
import { nanoid } from 'nanoid';

export default function Notes(){
    const [exercise, setExercise] = useState(
        [
            {
                id: nanoid(),
                name: 'Выпить стакан воды'
            }, 
            {
                id: nanoid(),
                name: 'Сделать зарядку'
            }, 
            {
                id: nanoid(),
                name: 'Пробежка'
            }, 
            {
                id: nanoid(),
                name: 'Витаминки'
            },
            {
                id: nanoid(),
                name: 'Принять таблетки'
            },
        ]
    );
    const [value, setValue] = useState("");

    function deleteElem(index){
        let newElem = [...exercise.slice(0, index), ...exercise.slice(index + 1)];
        setExercise(newElem);
    }

    function addNewExercise() {
        const exerciseCopy = [...exercise];
        exerciseCopy.push({
            id: nanoid(),
            name: value
        })
        setExercise(exerciseCopy);
        setValue("");
    }

    const list = exercise.map((elem, index) => {
        return <Exercise key={elem.id} elem={elem.name} index={index} deleteElem={deleteElem} />
    });

    return(
        <div className="notes">
            <div className="notes__wrap">
                <div className="notes__list">
                    {list}
                </div>
                <div className="notes__add">
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Новое задание" />
                    <button onClick={addNewExercise}>Добавить</button>
                </div>
            </div>
        </div>
    );
}