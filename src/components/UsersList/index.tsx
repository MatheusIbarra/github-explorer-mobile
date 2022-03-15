import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import EmptyList from '../EmptyList';
import { User } from '../../services/classes';
import { useStorageData } from '../../hooks/storageData';

import * as Styled from './styles';

interface UsersListProps {
    users: User[];
    navigation: any;
    headerText: string;
    isFavoriteList: boolean;
}

const UsersList: React.FC<UsersListProps> = ({
    users,
    navigation,
    headerText,
    isFavoriteList,
}) => {
    const { selectUser, handleFavoriteUser } = useStorageData();

    //Flatlist com lista de usuários.
    return (
        <>
            {users.length > 0 && (
                <Styled.FindedUsersText style={{ marginTop: 20 }}>
                    {headerText}
                </Styled.FindedUsersText>
            )}
            <Styled.UsersList
                data={users}
                ListEmptyComponent={() => (
                    <EmptyList emptyText="Está meio vazio por aqui! Busque por um usuário" />
                )}
                renderItem={({ item }: any) => (
                    <TouchableOpacity
                        onPress={() => selectUser(item, navigation)}
                    >
                        <Styled.UserContainer>
                            <Styled.UserAvatar
                                source={{ uri: item.avatar_url }}
                            />
                            <Styled.FindedUsersText>
                                {item.login}
                            </Styled.FindedUsersText>
                            {!isFavoriteList ? (
                                <FontAwesome
                                    name="chevron-right"
                                    size={24}
                                    color="black"
                                />
                            ) : (
                                <TouchableOpacity
                                    onPress={() => handleFavoriteUser(item)}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={30}
                                        color="red"
                                    />
                                </TouchableOpacity>
                            )}
                        </Styled.UserContainer>
                    </TouchableOpacity>
                )}
            ></Styled.UsersList>
        </>
    );
};

export default UsersList;
