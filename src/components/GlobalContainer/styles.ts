import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.background};
    align-items: center;
    padding: 20px 20px 0px 20px;
`;

export const BottomTabs = styled.View`
    justify-content: space-around;
    padding: 10px;
    height: 50px;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => props.theme.tabbar};
`;
