import React, { useState } from 'react';
import { AppState } from '../../redux/reducer';
import { connect } from 'react-redux';

export const AddContactToContact: React.FC<ContactProps> = ({ contacts }) => {
    console.log('contacts', contacts);
    const [searchMainContact, changeMainContact] = useState({value: '', name: ''})
    return (
        <div> hello {JSON.stringify(contacts)} </div>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.users
    }
}

type ContactProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(AddContactToContact)