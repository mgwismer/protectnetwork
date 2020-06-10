import React, { useCallback, useState, useMemo } from 'react';
import { addContact } from '../../redux/actions';
import { NavLink } from 'react-router-dom';
import { FirstContactType, FirstContactFieldType } from '../../models/data-models';
import { AppState } from '../../redux/reducer';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const initialState: FirstContactType = {
    name: '',
    email: '',
    phone: '',
    id: '0'
}

export const NewContact: React.FC<ContactProps> = ({ activeUser, addContact }) => {
        const [contactIndex, setContactIndex] = useState('0');
        const [listOfContacts, setListOfContacts] = useState<Array<FirstContactType>>([initialState]);
        const [activeInput, setActiveInput] = useState(0);
        const [contactInputType, setContactInputType] = useState<FirstContactFieldType>('name');

        const handleSubmit = useCallback((e) => {
            console.log('submit', listOfContacts)
            e.preventDefault();
            addContact(activeUser, listOfContacts);
        }, [listOfContacts]);
    
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
            <h2> Add contacts </h2>
            <div className='new-contact-form'>
                <div>
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


const mapStateToProps = (state: AppState) => {
    return {
        activeUser: state.activeUser
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
    bindActionCreators({ addContact }, dispatch);

type ContactProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewContact)