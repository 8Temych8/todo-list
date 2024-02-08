import addbtn from "/public/add-btn.png"
import "./NewTaskBtn.css"

const NewTaskBtn = (props) => {

    const addHandler = () => {
        props.isClicked();
    }

    return (
        <img id="add-task-btn" onClick={addHandler} src={addbtn} alt="ADD" height='50px' width='50px' />
    )
}

export default NewTaskBtn;