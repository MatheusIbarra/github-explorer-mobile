import React from 'react';
import { Dimensions, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Styled from './styles';

const Header: React.FC = () => {
    return (
        <Styled.HeaderContainer>
            <AntDesign
                name="github"
                size={Dimensions.get('window').height / 5}
                color="white"
            />
        </Styled.HeaderContainer>
    );
};

export default Header;
