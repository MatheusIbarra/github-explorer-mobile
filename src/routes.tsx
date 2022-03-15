import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Favorites from './pages/Favorites';

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
            <Stack.Screen name="Repositories" component={Repositories} />
            <Stack.Screen name="Favorite" component={Favorites} />
        </Stack.Navigator>
    );
};
