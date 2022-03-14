import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Styled from './styles';
import EmptyList from '../../components/EmptyList';
import GlobalContainer from '../../components/GlobalContainer';
import { User } from '../../services/classes';
import { Entypo } from '@expo/vector-icons';
const Home: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getUsers = async (user: string) => {
        try {
            Keyboard.dismiss();
            setError('');
            setLoading(true);
            setUsers([]);
            const { data }: any = await User.getUsers(user);
            if(data.items.length > 0) {
                setUsers(data.items);
            } else {
                setError('Não foi encontrado nenhum usuário')
            }
        } catch (error) {
            setError('Ocorreu um erro na busca.')
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlobalContainer>
            <Styled.SearchInputContainer>
                <Styled.SearchInput
                    value={search}
                    onChangeText={(e: any) => setSearch(e)}
                    placeholder="Buscar usuário"
                ></Styled.SearchInput>
                <Styled.SearchButton onPress={() => getUsers(search)} disabled={search.length < 3}>
                    <FontAwesome name="search" size={24} color="white" />
                </Styled.SearchButton>
            </Styled.SearchInputContainer>
            <Styled.ErrorText>{error}</Styled.ErrorText>
            {users.length > 0 && (
                <Styled.FindedUsersText style={{marginTop: 20}}>
                    Usuários encontrados
                </Styled.FindedUsersText>
            )}
            <Styled.UsersList
                data={users}
                ListEmptyComponent={() => (
                    <EmptyList emptyText="Está meio vazio por aqui! Busque por um usuário" />
                )}
                renderItem={({ item }: any) => (
                    <TouchableOpacity>
                        <Styled.UserContainer>
                            <Styled.UserAvatar
                                source={{ uri: item.avatar_url }}
                            />
                            <Styled.FindedUsersText>
                                {item.login}
                            </Styled.FindedUsersText>
                            <Entypo
                                name="chevron-right"
                                size={24}
                                color="black"
                            />
                        </Styled.UserContainer>
                    </TouchableOpacity>
                )}
            ></Styled.UsersList>
        </GlobalContainer>
    );
};

export default Home;
