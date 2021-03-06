import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import * as Styled from './styles';

interface GlobalContainerProps {
    navigation: any;
}

const GlobalContainer: React.FC<GlobalContainerProps> = ({
    children,
    navigation,
}) => {
    const route = useRoute();

    //Componente global para utilizar em todos os componentes.
    return (
        <Styled.Container>
            {children}
            <Styled.BottomTabs
                style={{ width: Dimensions.get('window').width }}
            >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <FontAwesome
                        name="search"
                        size={24}
                        color={
                            route.name === 'Home' ||
                            route.name === 'Repositories'
                                ? 'black'
                                : 'gray'
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Favorite')}
                >
                    <FontAwesome
                        name="heart"
                        size={24}
                        color={route.name === 'Favorite' ? 'black' : 'gray'}
                    />
                </TouchableOpacity>
            </Styled.BottomTabs>
        </Styled.Container>
    );
};

export default GlobalContainer;
