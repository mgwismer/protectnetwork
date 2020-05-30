import React, { useCallback } from 'react';
import './front-page.scss';
import { NavLink } from 'react-router-dom';

export const FrontPage: React.FC = () => {
    const handleCreateNewPearl = useCallback(() => {
        console.log('new pearl clicked');
    }, []);

    const handleAddForExistingPearl = useCallback(() => {
        console.log('add to pearl clicked');
    }, []);

    return (
        <div>
            <h2> Welcome to Pearl Protect </h2>
            <div className='frontpage-buttons'>
            <button className='frontpage-buttons__create'>
                <NavLink to={'/NewPearl'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    <div>Create New Pearl</div>
                </NavLink>
            </button>
            <button className='frontpage-buttons__add'>
                <NavLink to={'/ExistingPearl'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                   Add for existing Pearl
                </NavLink>
            </button>
                {/* <div className='frontpage-buttons__create' onClick={handleCreateNewPearl}> Create New Pearl </div>
                <div className='frontpage-buttons__add' onClick={handleAddForExistingPearl}> Add for existing Pearl </div> */}
            </div>
        </div>
    )
}