import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
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
    const { selectedUser } = useStorageData();

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
                <Styled.HeaderText>Favoritar ?</Styled.HeaderText>
                <TouchableOpacity>
                    <AntDesign name="heart" size={24} color="red" />
                </TouchableOpacity>
            </Styled.RepositoryHeader>
            <FlatList
                data={repositories}
                ListEmptyComponent={() => (
                    <EmptyList emptyText="Usuário não possui repositório !" />
                )}
                renderItem={({ item }: any) => (
                    <Styled.RepositoriesList>
                        <FontAwesome name="folder" size={30} color="blue" />
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
