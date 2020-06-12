import React from 'react';

export const UsersPage: React.FC = () => {
    return (
        <div>
            <div>
                <input type='button' name='account' value='UPDATE ACCOUNT' />
            </div>
            <div>
                <input type='button' name='contacts' value='UPDATE CONTACTS' />
            </div>
            <div>
                <input type='button' name='send' value='SEND ALERTS' />
            </div>
         </div>
    )
}