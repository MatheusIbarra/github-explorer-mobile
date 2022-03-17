import React from 'react';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import * as Styled from './styles';

const Header: React.FC = () => {
    //Header em todas as paginas
    return (
        <Styled.HeaderContainer>
            <FontAwesome
                name="github"
                size={Dimensions.get('window').width / 3}
                color="white"
            />
        </Styled.HeaderContainer>
    );
};

export default Header;
