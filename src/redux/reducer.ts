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
    data: { residentId: string, contactEmail: string };
}

export type ReduxAddContactAction = ReduxAddContactToResident;
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
    console.log('REDUCER', action);
    switch(action.type) {
        case ReduxActionTypes.ADD_RESIDENT:
            const newResidents = [...state.residents, action.data];
            return {...state, residents: newResidents}
        case ReduxActionTypes.ADD_CONTACT:
            return {...state, contacts: [...state.contacts, action.data]}
        case ReduxActionTypes.ADD_CONTACT_TO_RESIDENT:
            const activeResident = state.residents.findIndex(resident => resident.id === action.data.residentId);
            const updatedResident = state.residents[activeResident]
            updatedResident.firstContacts.push(action.data.contactEmail);
            const newResidentsArray = [...state.residents];
            return {...state, residents: newResidentsArray}
        default:
            return state;
    }
}