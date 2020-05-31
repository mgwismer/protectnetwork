export type ResidentType = {
    residentID: string;
    residence: string;
    name: string;
    emergencyContactName: string;
    emergencyContactNumber: string;
    firstContacts: Array<string>;
};

export type ContactType = {
    residentContactIDs: Array<string>;
    name: string;
    phone: string;
    email: string;
    firstContacts: Array<string>;
};
