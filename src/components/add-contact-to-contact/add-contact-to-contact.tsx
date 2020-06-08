import React from 'react';
import { AppState } from '../../redux/reducer';
import { connect } from 'react-redux';

export const AddContactToContact: React.FC<ContactProps> = ({ contacts }) => {
    console.log('contacts', contacts);
    return (
        <div> hello {JSON.stringify(contacts)} </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.contacts
    }
}

type ContactProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(AddContactToContact)