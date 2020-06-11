import { ReduxActionTypes } from './action-types';
import { ResidentType, UserType, FirstContactType } from '../models/data-models';

export interface AppState {
    residents: Array<ResidentType>;
    listOfUsers: Array<string>;
    users: Record<string, UserType>;
    activeUser: string;
}

interface ReduxBaseAction {
    type: ReduxActionTypes;
}

interface ReduxMakeUserInactive extends ReduxBaseAction {
    type: ReduxActionTypes.MAKE_USER_INACTIVE;
}

interface ReduxAddResident extends ReduxBaseAction {
    type: ReduxActionTypes.ADD_RESIDENT; 
    data: ResidentType;
}

interface ReduxAddContact extends ReduxBaseAction {
    type: ReduxActionTypes.ADD_CONTACT;
    data: { activeUser: string, listOfContacts: Array<FirstContactType>};
}

interface ReduxAddContactToResident extends ReduxBaseAction {
    type: ReduxActionTypes.ADD_CONTACT_TO_RESIDENT;
    data: { residentId: string, contactEmail: string };
}

interface ReduxMakeActiveUser extends ReduxBaseAction {
    type: ReduxActionTypes.MAKE_USER_ACTIVE;
    data: string;
}

interface ReduxCreateUser extends ReduxBaseAction {
    type: ReduxActionTypes.CREATE_USER;
    data: { username: string, user: UserType }
}

// export type ReduxAddContactAction = ReduxAddContactToResident;
export type ReduxActions = 
    ReduxAddResident | 
    ReduxAddContact | 
    ReduxAddContactToResident | 
    ReduxMakeActiveUser | 
    ReduxCreateUser |
    ReduxMakeUserInactive;

export const InitialState: AppState = {
    residents: [],
    users: {},
    listOfUsers: [],
    activeUser: ''
}

export function rootReducer(
    state: AppState = InitialState,
    action: ReduxActions,
): AppState {
    console.log('REDUCER HIT', action);
    switch(action.type) {
        case ReduxActionTypes.ADD_RESIDENT:
            const newResidents = [...state.residents, action.data];
            return {...state, residents: newResidents}
        case ReduxActionTypes.ADD_CONTACT:
            const { activeUser, listOfContacts } = action.data;
            const updatedUser = state.users[activeUser];
            updatedUser.firstContacts = listOfContacts;
            console.log('in reducer', updatedUser);
            return {...state, users: {...state.users, [activeUser]: {...updatedUser}}}
        case ReduxActionTypes.CREATE_USER:
            const newUser = action.data.username;
            const newUsersList = [...state.listOfUsers, newUser];
            const newUsers = {...state.users, [newUser]: action.data.user};
            return {...state, users: newUsers, listOfUsers: newUsersList}
        case ReduxActionTypes.MAKE_USER_ACTIVE:
            return {...state, activeUser: action.data};
        case ReduxActionTypes.MAKE_USER_INACTIVE:
            return {...state, activeUser: ''}
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