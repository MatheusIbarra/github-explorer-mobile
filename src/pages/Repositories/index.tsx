import React, { useEffect, useState } from 'react';
import { FlatList, Linking, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

import GlobalContainer from '../../components/GlobalContainer';
import { Repository } from '../../services/classes';
import EmptyList from '../../components/EmptyList';
import Loading from '../../components/Loading';
import { useStorageData } from '../../hooks/storageData';

import * as Styled from './styles';

const Repositories: React.FC<any> = ({ navigation }) => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { selectedUser, handleFavoriteUser, isUserFavorited } = useStorageData();

    const getUserRepository = async () => {
        try {
            setError('');
            setLoading(true);
            const { data }: any = await Repository.get(selectedUser.login);
            setRepositories(data);
        } catch (error) {
            setError('Ocorreu um erro ao carregar o repositório')
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUserRepository();
    }, []);

    if (loading) {
        return <Loading />;
    }

    if(error.length > 0) {
        return <Styled.ErrorText>{error}</Styled.ErrorText>
    }

    return (
        <GlobalContainer navigation={navigation}>
            <Styled.RepositoryHeader>
                <Styled.HeaderText>Favoritar {selectedUser.login}?</Styled.HeaderText>
                <TouchableOpacity onPress={() => handleFavoriteUser(selectedUser)}>
                    <AntDesign name="heart" size={24} color={isUserFavorited(selectedUser) ? 'red' : 'gray'} />
                </TouchableOpacity>
            </Styled.RepositoryHeader>
            <FlatList
                style={{width: '100%'}}
                data={repositories}
                keyExtractor={(item: any) => item.id}
                ListEmptyComponent={() => (
                    <EmptyList emptyText="Usuário não possui repositório !" />
                )}
                renderItem={({ item }: any) => (
                    <Styled.RepositoriesList onPress={() => Linking.openURL(item.html_url)}>
                        <FontAwesome name="folder" size={30} color="#7eb6ff" />
                        <Styled.RepositoryInfos>
                            <Styled.RepositoryName>
                                {item.name}
                            </Styled.RepositoryName>
                            <Styled.RepositoryDescription>
                                {item.description}
                            </Styled.RepositoryDescription>
                        </Styled.RepositoryInfos>
                    </Styled.RepositoriesList>
                )}
            />
        </GlobalContainer>
    );
};

export default Repositories;
