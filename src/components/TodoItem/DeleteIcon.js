import { ImCross } from "react-icons/im"; 
import React from "react";

function DeleteIcon({ className, onClick }) {
    return (
        <ImCross
            className={className}
            onClick={onClick}
        />
    )
}

export { DeleteIcon };