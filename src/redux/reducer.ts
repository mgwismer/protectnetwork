import { ReduxActionTypes } from './action-types';
import { ResidentType, ContactType } from '../models/data-models';
import { string } from 'prop-types';
import { ReactReduxContext } from 'react-redux';

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
    data: { residentID: string, contactID: string };
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
    switch(action.type) {
        case ReduxActionTypes.ADD_RESIDENT:
            return {...state, residents: [...state.residents, action.data]}
        case ReduxActionTypes.ADD_CONTACT:
            return {...state, contacts: [...state.contacts, action.data]}
        case ReduxActionTypes.ADD_CONTACT_TO_RESIDENT:
            return {...state}
        default:
            return state;
    }
}