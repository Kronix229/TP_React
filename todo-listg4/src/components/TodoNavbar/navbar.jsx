import React from 'react';

export const TodoNavbar = ({todosCount, pendingTodosCount}) => {
    return(
       <nav className='nav'>
        <div>Filter:</div>
        <ul>
            <li>
                <a href='/All'>All</a>
            </li>
            <li>
                <a href='/Active'>Active</a>
            </li>
            <li>
                <a href='Finished'>Finished</a>
            </li>
            <div className='Tcount'>{todosCount}</div>
            <div className='Pcount'>{pendingTodosCount}</div>
        </ul>

       </nav>
    )
}

