import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState } from '../../redux/reducer';
import { connect } from 'react-redux';

export const ExistingResident: React.FC<ContactProps> = ({ residents, contacts }) => {
    
    return (
        <div>
            <div className='new-resident-form-input'>
                <label>
                Name:
                </label>
            </div>
        </div>
    )
}

const mapStateToProps = (state: AppState) => ({
    residents: state.residents,
    contacts: state.contacts
})

type ContactProps = ReturnType<typeof mapStateToProps>

export default connect(mapStateToProps)(ExistingResident)