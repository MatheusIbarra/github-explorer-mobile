import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';

import usePersistedState from '../utils/usePersistedState';
import { User } from '../services/classes';
interface StorageContextData {
    users: User[];
    selectedUser: User;
    selectUser: (user: User, navigation: any) => void;
    handleFavoriteUser: (user: User) => void;
    isUserFavorited: (user: User) => boolean;
}

const storageDataContext = createContext<StorageContextData>(
    {} as StorageContextData,
);

const StorageDataProvider: React.FC = ({ children }) => {
    const [users, setUsers] = usePersistedState<User[]>(
        '@GitExplorer:users',
        [],
    );
    const [selectedUser, setSelectedUser] = useState(new User());

    //SELECIONA USUÁRIO E REDIRECIONA PARA SEUS REPOSITORIOS
    const selectUser = (user: User, navigation: any) => {
        setSelectedUser(user);
        navigation.navigate('Repositories');
    };

    const handleFavoriteUser = (user: User) => {
        //Verifica se usuário está favoritado, caso esteja, pergunta se quer desfavoritar.
        //Caso usuário não esteja na lista de favoritos, favorita usuário.
        if (!isUserFavorited(user)) {
            setUsers([...users, { ...user }]);
        } else {
            Alert.alert(
                'Aviso',
                'Tem certeza que deseja desfavoritar usuário ?',
                [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                    },
                    {
                        text: 'Sim',
                        onPress: () => {
                            //Procura o usuário na lista de usuários e retira do array. No final usa-se setState para
                            //atualizar storage.
                            const index = users.findIndex(
                                (userStorage) => userStorage.id === user.id,
                            );
                            users.splice(index, 1);
                            setUsers([...users]);
                        },
                    },
                ],
            );
        }
    };

    const isUserFavorited = (user: User) => {
        //Verifica se o usuário já está favoritado ou não.
        const index = users.findIndex(
            (userStorage) => userStorage.id === user.id,
        );
        if (index >= 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <storageDataContext.Provider
            value={{
                selectedUser,
                users,
                selectUser,
                handleFavoriteUser,
                isUserFavorited,
            }}
        >
            {children}
        </storageDataContext.Provider>
    );
};

function useStorageData(): StorageContextData {
    const context = useContext(storageDataContext);

    //Caso tente usar os hooks e o componente não esteja envolto pelo contexto
    if (!context) {
        throw new Error(
            'UseStorageData use must be used within an storageDataProvider',
        );
    }

    return context;
}

export { StorageDataProvider, useStorageData };
