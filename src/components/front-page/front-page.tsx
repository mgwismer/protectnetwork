import React, { useCallback } from 'react';
import './front-page.scss';
import { NavLink } from 'react-router-dom';
import { AppState } from '../../redux/reducer';
import { connect } from 'react-redux';

export const FrontPage: React.FC<ContactProps> = ({ residents, contacts }) => {
    console.log('residents, contacts', residents, contacts);
    return (
        <div>
            <h2> Welcome to ProShield </h2>
            <div className='frontpage-buttons'>
            <button className='frontpage-buttons__create'>
                <NavLink to={'/NewResident'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    <div>Create New Resident</div>
                </NavLink>
            </button>
            <button className='frontpage-buttons__create'>
                <NavLink to={'/NewContact'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    <div>Create New Contact</div>
                </NavLink>
            </button>
            {!!residents.length && !!contacts.length &&
                <button className='frontpage-buttons__add'>
                    <NavLink to={'/ExistingResident'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    Add for existing Resident
                    </NavLink>
                </button>}
            {contacts.length > 1 &&
                <button className='frontpage-buttons__add'>
                    <NavLink to={'/AddContactToContact'} style={{color: 'black', textDecoration: 'none', border: '0px'}}>
                    Add Contact to Contact
                    </NavLink>
                </button>}
            </div>
            <div className='frontpage-footer'>
                MVP created as part of 
                <br/>
                <a href="https://covid19challenge.mit.edu/beat-the-pandemic-2/">MIT Beat the Pandemic II hackathon</a>
                <br/>
                Track G
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => {
    console.log('state', state);
    return {
        residents: state.residents,
        contacts: state.contacts
    }
}

type ContactProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(FrontPage)