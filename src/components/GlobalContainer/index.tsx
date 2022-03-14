import React from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';
import {} from '@expo/vector-icons';
const GlobalContainer: React.FC = ({ children }) => {
    return (
        <Styled.Container>
            {children}
            <Styled.BottomTabs
                style={{ width: Dimensions.get('window').width }}
            >
                <TouchableOpacity>
                    <FontAwesome name="search" size={24} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="heart" size={24} color="gray" />
                </TouchableOpacity>
            </Styled.BottomTabs>
        </Styled.Container>
    );
};

export default GlobalContainer;
