import React, { createContext, useState, useContext } from 'react';
import { User } from '../services/classes';
import usePersistedState from '../utils/usePersistedState';

interface StorageContextData {
    users: User[];
    selectedUser: User;
    selectUser: (user: User, navigation: any) => void;
}

const storageDataContext = createContext<StorageContextData>(
    {} as StorageContextData,
);

const StorageDataProvider: React.FC = ({ children }) => {
    const [users, setUsers] = usePersistedState('@GitExplorer:users', []);
    const [selectedUser, setSelectedUser] = useState(new User());

    const selectUser = (user: User, navigation: any) => {
        setSelectedUser(user);
        navigation.navigate('Repositories');
    };

    return (
        <storageDataContext.Provider
            value={{ selectedUser, users, selectUser }}
        >
            {children}
        </storageDataContext.Provider>
    );
};

function useStorageData(): StorageContextData {
    const context = useContext(storageDataContext);

    if (!context) {
        throw new Error(
            'UseStorageData use must be used within an storageDataProvider',
        );
    }

    return context;
}

export { StorageDataProvider, useStorageData };
