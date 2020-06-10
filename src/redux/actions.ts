import { ReduxActionTypes } from './action-types';
import { ReduxActions } from './reducer';
import { ResidentType, UserType } from '../models/data-models';

export function addResident(residentValue: ResidentType): ReduxActions {
    console.log('resident action', residentValue);
    return {
        type: ReduxActionTypes.ADD_RESIDENT,
        data: residentValue
    }
}

export function addContact(contactValue: UserType): ReduxActions {
    return {
        type: ReduxActionTypes.ADD_CONTACT,
        data: contactValue
    }
}

export function makeActiveUser(username: string): ReduxActions {
    return {
        type: ReduxActionTypes.MAKE_ACTIVE_USER,
        data: username
    }
}

export function createUser(username: string, user: UserType): ReduxActions {
    return {
        type: ReduxActionTypes.CREATE_USER,
        data: { username, user }
    }
}

export function addContactToResident(residentId: string, contactEmail: string): ReduxActions {
    return {
        type: ReduxActionTypes.ADD_CONTACT_TO_RESIDENT,
        data: { residentId, contactEmail }
    }
}