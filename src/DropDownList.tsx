// import { useState } from "react";
// import './DropDownList.css'

// const DropDownList = () => {

//     const [FilterParameter, setFilterParameter] = useState('All');

//     const parameterChangeHandler = (event) => {
//         setFilterParameter(event.target.value);
//     }

//     return (
//         <div>
//             <select id="dropDown" value={FilterParameter} onChange={parameterChangeHandler}>
//                 <option value="All">All</option>
//                 <option value="Complete">Complete</option>
//                 <option value="Incomplete">Incomplete</option>
//             </select>
//         </div>
//     )
// }

// export default DropDownList;






import { useState } from "react";
import "./DropDownList.css";

export default function DropDownList() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("All");
  function handleBlur(e) {
    console.log(e);
  }
  return (
    <div className="dropDownList">
        <div className="dropdown">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className="dropdown-btn"
        >
          {selected}
          <span
            className={isActive ? "fas fa-caret-up" : "fas fa-caret-down"}
          />
        </div>
        <div
          className="dropdown-content"
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
            className="item"
            id="all"
          >
            All
          </div>
          <div
            className="item"
            id="complete"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Complete
          </div>
          <div
            className="item"
            id="incomplete"
            onClick={(e) => {
              setIsSelected(e.target.textContent);
              setIsActive(!isActive);
            }}
          >
            Incomplete
          </div>
        </div>
      </div>
    </div>
  );
}
