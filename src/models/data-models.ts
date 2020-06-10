export type FirstContactFieldType = 'name' | 'email' | 'phone' | 'id';

export type FirstContactType = {
    [key in FirstContactFieldType]: string;
};

export type ResidentType = {
    id: string;
    residence: string;
    name: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    firstContacts: Array<string>;
};

export type UserType = {
    residentContactIDs: Array<string>;
    name: string;
    phone: string;
    email: string;
    password: string;
    firstContacts: Array<FirstContactType>;
};
