import React, { useCallback, useState } from 'react';
import './new-resident-page.scss';
import { addResident } from '../../redux/actions';

export const NewResident: React.FC = () => {
    const [nameValue, setNameValue] = useState('');
    const [residence, setResidence] = useState('');
    const [emergencyContactName, setEmergencyContactName] = useState('');
    const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const residentID = Date.now().toString();
        console.log('submit', nameValue, residence, emergencyContactName, emergencyContactNumber, residentID)
        const resident = {
            residentID,
            residence,
            name: nameValue,
            emergencyContactName,
            emergencyContactNumber,
            firstContacts: []
        }
        addResident(resident);
        setNameValue('');
        setResidence('');
        setEmergencyContactName('');
        setEmergencyContactNumber('')
    }, [nameValue, residence, emergencyContactName, emergencyContactNumber]);

    const handleNameChange = useCallback((e) => {
        e.preventDefault();
        setNameValue(e.target.value);
    }, []);

    const handleHomeChange = useCallback((e) => {
        setResidence(e.target.value);
    }, []);

    const handleEmergencyContactChange = useCallback((e) => {
        e.preventDefault();
        setEmergencyContactName
        (e.target.value);
    }, []);

    const handleContactNumberChange = useCallback((e) => {
        setEmergencyContactNumber(e.target.value);
    }, []);

    return (
        <React.Fragment>
            <h2> Add nursing home resident</h2>
            <div className='new-resident-form'>
                <form onSubmit={handleSubmit}>
                    <div className='new-resident-form-input'>
                        <label>
                        Name:
                        <input type="text" value={nameValue} onChange={handleNameChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-resident-form-input'>
                        <label>
                        Home:
                        <input type="text" value={residence} onChange={handleHomeChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-resident-form-input'>
                        <label>
                            Emergency Contact:
                            <input type="text" value={emergencyContactName} onChange={handleEmergencyContactChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-resident-form-input'>
                        Emergency Contact Number:
                        <label>
                        <input type="text" value={emergencyContactNumber} onChange={handleContactNumberChange} />
                        </label>
                    </div>
                    <div className='new-resident-form-submit'>
                        <input type="submit" value='Submit' />
                    </div>
                </form>
            </div>     
        </React.Fragment>

    )
}