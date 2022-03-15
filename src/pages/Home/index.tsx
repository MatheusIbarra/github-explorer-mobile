import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { User } from '../../services/classes';

import Loading from '../../components/Loading';
import UsersList from '../../components/UsersList';
import GlobalContainer from '../../components/GlobalContainer';

import * as Styled from './styles';

const Home: React.FC<any> = ({ navigation }) => {
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
            const { data }: any = await User.get(user);
            if (data.items.length > 0) {
                setUsers(data.items);
            } else {
                setError('Não foi encontrado nenhum usuário');
            }
        } catch (error) {
            setError('Ocorreu um erro na busca.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <GlobalContainer navigation={navigation}>
            <Styled.SearchInputContainer>
                <Styled.SearchInput
                    value={search}
                    onChangeText={(e: any) => setSearch(e)}
                    placeholder="Buscar usuário"
                ></Styled.SearchInput>
                <Styled.SearchButton
                    onPress={() => getUsers(search)}
                    disabled={search.length < 3}
                >
                    <FontAwesome name="search" size={24} color="white" />
                </Styled.SearchButton>
            </Styled.SearchInputContainer>
            <Styled.ErrorText>{error}</Styled.ErrorText>
            {loading ? (
                <Loading />
            ) : (
                <UsersList
                    isFavoriteList={false}
                    headerText="Usuários encontrados"
                    users={users}
                    navigation={navigation}
                />
            )}
        </GlobalContainer>
    );
};

export default Home;
