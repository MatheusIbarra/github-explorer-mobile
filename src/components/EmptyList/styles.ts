
import styled from 'styled-components/native';

export const EmptyListContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 250px;
    margin-top: 50px;
`

export const EmptyText = styled.Text`
    color: ${props => props.theme.repoDescription};
    text-align: center;
    margin-top: 20px;

`
