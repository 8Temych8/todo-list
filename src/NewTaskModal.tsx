import "./NewTaskModal.css"

const NewTaskModal = (props) => {


    const buttonHandler = () => {
        props.setIsOpen(false);
    }

    if (props.isOpen) return (
        <div className="modal">
            <div className="modalWindow">
                <h2>NEW NOTE</h2>
                <div className="input-field-div">
                    <input type="text" id='input-field-modal' placeholder='Input your note...'/>
                </div>
                <div className="footer-btns">
                    <div>
                        <button id="cancel-btn" onClick={buttonHandler}>CANCEL</button>
                    </div>
                    <div>
                        <button id="apply-btn">APPLY</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default NewTaskModal;