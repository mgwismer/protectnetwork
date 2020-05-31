import React, { useMemo, useState, useCallback } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState, ReduxActions } from '../../redux/reducer';
import { connect } from 'react-redux';
import Select from 'react-select';
import './add-contact-to-resident.scss';
import { addContactToResident } from '../../redux/actions';
import { store } from '../../App';
import { NavLink } from 'react-router-dom';

const customStyles = {
    option: (provided: any, state: { isSelected: boolean; }) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 10,
      width: 200,
    }),
    menu: (styles: any) => ({
      width: 200,
      backgroundColor: 'ivory',
    }),
    control: (styles: any) => ({
      ...styles,
      // none of react-select's styles are passed to <Control />
      backgroundColor: 'ivory',
      width: 200,
    }),
    singleValue: (provided: any, state: { isDisabled: any; }) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }

  type OptionType = {
    value: string;
    label: string;
  };

type foundResidentType = {
    name: string;
    home: string;
}

export const ExistingResident: React.FC<ContactProps> = ({ residents, contacts }) => {
    const [searchResident, changeResident] = useState<OptionType>({value: '', label: ''})
    const [foundResidentId, changeFoundResidentId] = useState('');
    const [foundResident, changeFoundResident] = useState<foundResidentType>({name: '', home: ''});
    const [searchContact, changeContact] = useState<OptionType>({value: '', label: ''})
    const [foundContact, changeFoundContact] = useState('');
    
    const ResidentOptions = useMemo(() => {
        return residents.map((resident: { id: string; name: any; residence: any; }) => ({value: resident.id, label: `${resident.name} , ${resident.residence}`}))
    }, []);

    const handleResidentChange = useCallback((inputTerm) => {
        console.log('inp', inputTerm, residents);
        changeResident(inputTerm);
      },[residents]);

    const handleResidentSubmit = useCallback(() => {
        console.log('sub', searchResident.value);
        changeFoundResidentId(searchResident.value);
        const foundResident = residents.filter((resident: { id: string; }) => searchResident.value === resident.id).map((resident: { name: string; residence: string; }) => ({name: resident.name, home: resident.residence}));
        console.log('found', foundResident[0]);
        changeFoundResident(foundResident[0])
    }, [searchResident])

    const ContactOptions = useMemo(() => {
        return contacts.map((contact: { email: string; }) => ({value: contact.email, label: contact.email}));
    }, []);

    const handleContactChange = useCallback((inputTerm) => {
        changeContact(inputTerm);
      },[residents]);

    const handleContactSubmit = useCallback(() => {
        console.log('contact submit', searchContact);
        changeFoundContact(searchContact.value);
    }, [searchContact])

    const handleAddContact = useCallback(() => {
        console.log('handle add', foundResidentId, foundContact);
        store.dispatch(addContactToResident(foundResidentId, foundContact));
        changeFoundResidentId('');
        changeFoundContact('');
    }, [foundResidentId, foundContact])

    return (
        <div>
            <div className='search-resident'>
                <div>
                    Type in resident's name
                </div>
                <div className='search-resident-select'>
                    <Select 
                        value={searchResident}
                        options={ResidentOptions}
                        styles={customStyles}
                        onChange={handleResidentChange}
                        onKeyDown={handleResidentSubmit}
                    />
                </div>
                <div>
                    {foundResidentId &&
                        `Found resident ${foundResident.name} in ${foundResident.home}`}
                </div>
                <div className='search-contact-text'>
                    Type in contact's email
                </div>
                <div className='search-contact-select'>
                    <Select 
                        value={searchContact}
                        options={ContactOptions}
                        styles={customStyles}
                        onChange={handleContactChange}
                        onKeyDown={handleContactSubmit}
                    />
                </div>
                <div>
                    {foundContact &&
                        `Found contact ${foundContact}`}
                </div>
            </div>
            {foundResidentId && foundContact &&
            <div>
                <button className='add-contact-to-resident-button' onClick={handleAddContact} value='Add'>
                    ADD
                </button>
            </div>}
            <button className='add-to-resident-home'>
                <NavLink to={'/'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    Back to Home
                </NavLink>
            </button>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    residents: state.residents,
    contacts: state.contacts
})

// const mapDispatchToProps = (dispatch: Dispatch<ReduxActions>) =>
//     bindActionCreators({ addContactToResident }, dispatch);

type ContactProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(ExistingResident)