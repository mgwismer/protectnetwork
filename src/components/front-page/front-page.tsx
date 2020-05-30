import React, { useCallback } from 'react';
import './front-page.scss';

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
                <div className='frontpage-buttons__create' onClick={handleCreateNewPearl}> Create New Pearl </div>
                <div className='frontpage-buttons__add' onClick={handleAddForExistingPearl}> Add for existing Pearl </div>
            </div>
        </div>
    )
}