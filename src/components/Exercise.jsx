import { useState } from "react";

export default function Exercise({ elem, index, deleteElem, setChangedExercise }){
    const [isChecked, setisChecked] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(elem);

    function setChecked(){
        setisChecked(!isChecked);
    }

    return (
        <div className="notes__elem">
            {
                !isEdit ? 
                <label className={isChecked ? "line-through" : ""}>
                    <input type="checkbox" checked={isChecked} onChange={setChecked} />
                    {elem}
                </label> 
                : 
                <input className="notes__input" value={value} onChange={(e) => setValue(e.target.value)} />
            }
            <div>
            {
                !isEdit ? 
                <span onClick={() => setIsEdit(!isEdit)} className="notes__pencil">🖉</span>
                : 
                <span onClick={() => {setIsEdit(!isEdit); setChangedExercise(index, value)}} className="notes__pencil">✓</span>
            }
                <span onClick={() => {deleteElem(index)}}>☒</span>
            </div>
        </div>
    )
    
};