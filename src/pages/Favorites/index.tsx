import React from 'react';


import GlobalContainer from '../../components/GlobalContainer';
import UsersList from '../../components/UsersList';
import { useStorageData } from '../../hooks/storageData';

const Favorites: React.FC<any> = ({ navigation }) => {
    const { users } = useStorageData();

    return (
        <GlobalContainer navigation={navigation}>
            <UsersList
                headerText="Meus favoritos"
                users={users}
                navigation={navigation}
                isFavoriteList={true}
            ></UsersList>
        </GlobalContainer>
    );
};

export default Favorites;
