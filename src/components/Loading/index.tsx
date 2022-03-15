import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import * as Styled from './styles';

const Loading: React.FC = () => {
    return (
        <Styled.LoadingContainer>
            <ActivityIndicator size="large" color="#0000ff" />
        </Styled.LoadingContainer>
    );
};

export default Loading;
