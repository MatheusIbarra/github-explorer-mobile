import React from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styled from './styles';

const Loading: React.FC = () => {
    //Componente loading com activity indicator
    return (
        <Styled.LoadingContainer>
            <ActivityIndicator size="large" color="#0000ff" />
        </Styled.LoadingContainer>
    );
};

export default Loading;
