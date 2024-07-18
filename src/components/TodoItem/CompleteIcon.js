import { FaCheck } from "react-icons/fa";
import React from "react";

function CompleteIcon({ className, onClick }) {
    return (
        <FaCheck
            className={className}
            onClick={onClick}
        />
    )
}

export { CompleteIcon };