import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

const Stack = createStackNavigator();

export const Routes: React.FC = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};
