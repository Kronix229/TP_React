import React from 'react';
import { Link } from 'react-router-dom';

export const TodoNavbar = ({todosCount, pendingTodosCount}) => {
    return(
       <nav className='nav'>
        <div className='filter'>Filter:</div>
            <ul>
                <li>
                    <Link to='/All'>All</Link>
                </li>
                <li>
                    <Link to='/Active'>Active</Link>
                </li>
                <li>
                    <Link to='/Finished'>Finished</Link>
                </li>
                
            </ul>
            <div className='contadores'>
                <div className='Tcount'>{todosCount}</div>
                <div className='Pcount'>{pendingTodosCount}</div>
            </div>
       </nav>
    )
}

