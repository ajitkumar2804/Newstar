import React from 'react';
import '../styles/categories.css'

export default function Categories() {
    return (
        <div>

            <ul className="list-group">
                <li className='list-group-item'><h3>Categories</h3></li>
                <li className="list-group-item">Business <i class="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Health <i class="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Politics <i class="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Sports <i class="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Technology <i class="fa-solid fa-arrow-right"></i></li>
            </ul>
        </div>
    )
}