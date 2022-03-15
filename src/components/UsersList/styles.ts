import styled from 'styled-components/native';

export const UsersListContainer = styled.View`
    width: 100%;
    margin-top: 20px;
`

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

export const FindedUsersText = styled.Text`
    font-size: 16px;
    color: ${(props) => props.theme.repoDescription};
    text-align: left;
    margin-right: auto;
`;

