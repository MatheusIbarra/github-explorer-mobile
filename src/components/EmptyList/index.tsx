import React from 'react';
import { Image } from 'react-native';
import emptyListImage from '../../../assets/images/empty-list.png';

import * as Styled from './styles';

interface EmptyListProps {
    emptyText: string;
}

const EmptyList: React.FC<EmptyListProps> = ({ emptyText }) => {
    return (
        <Styled.EmptyListContainer>
            <Image
                source={emptyListImage}
                style={{ width: '100%', height: '100%', flex: 1 }}
            />
            <Styled.EmptyText>{emptyText}</Styled.EmptyText>
        </Styled.EmptyListContainer>
    );
};

export default EmptyList;
