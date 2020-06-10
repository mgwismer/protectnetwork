import React, { useCallback, useState, useMemo, ReactEventHandler } from 'react';
import { addContact } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { store } from '../../App';
import { FirstContactType, FirstContactFieldType } from '../../models/data-models';

const initialState: FirstContactType = {
    name: '',
    email: '',
    phone: '',
    id: '0'
}

export const NewContact: React.FC = () => {
        const [nameValue, setNameValue] = useState('');
        const [emailValue, setEmailValue] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [contactIndex, setContactIndex] = useState('0');
        const [listOfContacts, setListOfContacts] = useState<Array<FirstContactType>>([initialState]);
        const [activeInput, setActiveInput] = useState(0);
        const [contactInputType, setContactInputType] = useState<FirstContactFieldType>('name');

        const handleSubmit = useCallback((e) => {
            console.log('submit', nameValue, listOfContacts)
            e.preventDefault();
            const contact = {
                name: nameValue,
                email: emailValue,
                phone: phoneNumber,
                residentContactIDs: [],
                firstContacts: listOfContacts
            }
            // store.dispatch(addContact(contact));
            setNameValue('');
            setEmailValue('');
            setPhoneNumber('');
        }, [nameValue, emailValue, phoneNumber]);
    
        const handleNameChange = useCallback((e) => {
            e.preventDefault();
            setNameValue(e.target.value);
        }, []);
    
        const handleEmailChange = useCallback((e) => {
            setEmailValue(e.target.value);
        }, []);
    
        const handlePhoneNumberChange = useCallback((e) => {
            e.preventDefault();
            setPhoneNumber(e.target.value);
        }, []);
    
        const handleFirstContactChange = useCallback((e) => {
            const newArray = [...listOfContacts];
            listOfContacts.forEach((contact, index) => {
                if (activeInput === index) {
                    contact[contactInputType] = e.target.value;
                }
                return contact;
            });
            setListOfContacts(newArray);
        }, [activeInput, listOfContacts, contactInputType])

        const handleAddContact = useCallback(() => {
            const addState = {
                name: '',
                email: '',
                phone: '',
                id: `${parseInt(contactIndex)+1}`
            }
            setListOfContacts(oldArray => [...oldArray, addState]);
            setContactIndex(`${parseInt(contactIndex)+1}`);
        }, [contactIndex])

        const handleOnFocus = useCallback(() => {
            if (document.activeElement && document.activeElement.tagName === 'INPUT') {
                setContactInputType((document.activeElement as HTMLInputElement).name.split(':')[0] as FirstContactFieldType);
                setActiveInput(parseInt((document.activeElement as HTMLInputElement).name.split(':')[1]));
            }
        }, []);

        const contactInputs = useMemo(() => {
            return listOfContacts.map((contact, index) => (                    
                <div className='new-resident-form-input'>
                    <div>Add close contact</div>
                    <label>
                        Name
                        <input type="text" name={`${'name' as FirstContactFieldType}:${index}`} value={`${contact.name}`} onFocus={handleOnFocus} onChange={handleFirstContactChange}/>
                    </label>
                    <label>
                        Email
                        <input type="text" name={`${'email' as FirstContactFieldType}:${index}`} value={`${contact.email}`} onFocus={handleOnFocus} onChange={handleFirstContactChange}/>
                    </label>
                    <label>
                        Phone
                        <input type="text" name={`${'phone' as FirstContactFieldType}:${index}`} value={`${contact.phone}`} onFocus={handleOnFocus} onChange={handleFirstContactChange}/>
                    </label>
                </div>
            ))
        }, [contactIndex, listOfContacts, handleOnFocus, handleFirstContactChange])

        return (
        <React.Fragment>
            <h2> Add new contact </h2>
            <div className='new-contact-form'>
                <div>
                    <div className='new-contact-form-input'>
                        <label>
                        Name:
                        <input type="text" value={nameValue} onChange={handleNameChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-contact-form-input'>
                        <label>
                        Email:
                        <input type="text" value={emailValue} onChange={handleEmailChange} />
                        </label>
                    </div>
                    <br/>
                    <div className='new-contact-form-input'>
                        <label>
                            Phone Number
                            <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                        </label>
                    </div>
                    {contactInputs}
                    <div className='new-contact-add-btn'>
                        <input type='submit' value='Add Contact' onClick={handleAddContact}/>
                    </div>
                    <div className='new-contact-form-submit'>
                        <input type="submit" value='Submit' onClick={handleSubmit}/>
                    </div>
                </div>
            </div>     
            <button className='new-contact-home'>
                <NavLink to={'/'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    Back to Home
                </NavLink>
            </button>
        </React.Fragment>
    )
}