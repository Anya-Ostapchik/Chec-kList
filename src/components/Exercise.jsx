import { useState } from "react";

export default function Exercise({ elem, index, deleteElem }){
    const [isChecked, setisChecked] = useState(false);

    function setChecked(){
        setisChecked(!isChecked);
    }

    return (
        <div className="notes__elem">
            <label className={isChecked ? "line-through" : ""}>
                <input type="checkbox" checked={isChecked} onChange={setChecked} />
                {elem}
            </label>
            <div>
                <span className="notes__pencil">🖉</span>
                <span onClick={() => {deleteElem(index)}}>☒</span>
            </div>
        </div>
    )
    
};