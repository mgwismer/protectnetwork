import { ReduxActionTypes } from './action-types';
import { ReduxActions } from './reducer';
import { ResidentType, UserType, FirstContactType } from '../models/data-models';

export function addResident(residentValue: ResidentType): ReduxActions {
    console.log('resident action', residentValue);
    return {
        type: ReduxActionTypes.ADD_RESIDENT,
        data: residentValue
    }
}

export function addContact(activeUser: string, listOfContacts: Array<FirstContactType>): ReduxActions {
    return {
        type: ReduxActionTypes.ADD_CONTACT,
        data: { activeUser, listOfContacts }
    }
}

export function makeActiveUser(username: string): ReduxActions {
    return {
        type: ReduxActionTypes.MAKE_USER_ACTIVE,
        data: username
    }
}

export function deactivateUser(): ReduxActions {
    return {
        type: ReduxActionTypes.MAKE_USER_INACTIVE
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