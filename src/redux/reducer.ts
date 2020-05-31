import { ReduxActionTypes } from './action-types';
import { ResidentType, ContactType } from '../models/data-models';

export interface AppState {
    residents: Array<ResidentType>;
    contacts: Array<ContactType>;
    home: string;
}

interface ReduxBaseAction {
    type: ReduxActionTypes;
}

interface ReduxAddResident extends ReduxBaseAction {
    type: ReduxActionTypes.ADD_RESIDENT; 
    data: ResidentType;
}

interface ReduxAddContact extends ReduxBaseAction {
    type: ReduxActionTypes.ADD_CONTACT;
    data: ContactType;
}

interface ReduxAddContactToResident extends ReduxBaseAction {
    type: ReduxActionTypes.ADD_CONTACT_TO_RESIDENT;
    data: { id: string, contactID: string };
}

export type ReduxActions = ReduxAddResident | ReduxAddContact | ReduxAddContactToResident;

export const InitialState: AppState = {
    residents: [],
    contacts: [],
    home: ''
}

export function rootReducer(
    state: AppState = InitialState,
    action: ReduxActions,
): AppState {
    console.log('rootReducer', action)
    switch(action.type) {
        case ReduxActionTypes.ADD_RESIDENT:
            const newResidents = [...state.residents, action.data];
            console.log('new resi', newResidents);
            return {...state, residents: newResidents}
        case ReduxActionTypes.ADD_CONTACT:
            return {...state, contacts: [...state.contacts, action.data]}
        case ReduxActionTypes.ADD_CONTACT_TO_RESIDENT:
            return {...state}
        default:
            return state;
    }
}