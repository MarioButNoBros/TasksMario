import React from 'react';
import './TodosLoading.css';

function TodosLoading() {

    return (
        <div class="container">
            <svg className='svgLoading' viewBox="25 25 50 50">
                <circle className='circleLoading' r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    )
}

export { TodosLoading };