import { ReduxActionTypes } from './action-types';
import { ReduxActions } from './reducer';
import { ResidentType, ContactType } from '../models/data-models';

export function addResident(residentValue: ResidentType): ReduxActions {
    console.log('resident action', residentValue);
    return {
        type: ReduxActionTypes.ADD_RESIDENT,
        data: residentValue
    }
}

export function addContact(contactValue: ContactType): ReduxActions {
    return {
        type: ReduxActionTypes.ADD_CONTACT,
        data: contactValue
    }
}