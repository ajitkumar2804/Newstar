import React from 'react';
import '../styles/sidebar.css'

export default function Sidebar() {
    return (
        <div>

            <ul className="list-group">
                <li className='list-group-item'><h3>Categories</h3></li>
                <li className="list-group-item">Business <i className="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Health <i className="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Politics <i className="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Sports <i className="fa-solid fa-arrow-right"></i></li>
                <li className="list-group-item">Technology <i className="fa-solid fa-arrow-right"></i></li>
            </ul>
        </div>
    )
}