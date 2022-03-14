import styled from 'styled-components/native';

export const SearchInputContainer = styled.View`
    flex-direction: row;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 20%;
    background-color: ${(props) => props.theme.folders};
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-left: 20px;
`;

export const SearchInput = styled.TextInput`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 75%;
    padding: 5px;
`;

export const UsersListContainer = styled.View`
    width: 100%;
    margin-top: 20px;
`

export const FindedUsersText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.repoDescription};
    text-align: left;
    margin-right: auto;
`;


export const ErrorText = styled.Text`
    font-size: 12px;
    color: ${(props) => props.theme.error};
    text-align: left;
    margin-right: auto;
`;

export const UsersList = styled.FlatList`
    margin-top: 20px;
`

export const UserContainer = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    width: 100%;

`

export const UserAvatar = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-right: 30px;
`
