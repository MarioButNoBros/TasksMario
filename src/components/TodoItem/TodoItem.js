import './TodoItem.css';
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <div className={`check-container ${props.completed && "completed"}`}>
                <CompleteIcon
                    className={`check ${props.completed && "Icon-check--active"}`}
                    onClick={props.onComplete}
                />
            </div>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <div className='Icon'>
                <DeleteIcon
                    className={`Icon-delete`}
                    onClick={props.onDelete}
                />
            </div>
        </li>
    );
}

export { TodoItem };