import styled from 'styled-components/native';

export const RepositoryHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const HeaderText = styled.Text`
    color: ${props => props.theme.repoDescription};
    font-weight: bold;
    font-size: 16px;
`

export const RepositoriesList = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const RepositoryInfos = styled.View`
    margin-left: 20px;
`

export const RepositoryName = styled.Text`
    color: ${props => props.theme.repoTitle};
    font-size: 14px;


`
export const RepositoryDescription = styled.Text`
    font-size: 12px;
    color: ${props => props.theme.repoDescription};
    margin-right: 30px;
`

export const ErrorText = styled.Text`
    margin-top: 20px;
    margin-left: 20px;
    font-size: 16px;
    color: ${(props) => props.theme.error};
    text-align: left;
    margin-right: auto;
`;

