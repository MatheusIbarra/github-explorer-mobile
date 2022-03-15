import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './src/hooks';
import { Routes } from './src/routes';
import Header from './src/components/Header';

export default function App() {
    return (
        <AppProvider>
            <StatusBar backgroundColor={'#040404'}></StatusBar>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    flex: 1,
                }}
            >
                <Header />
                <NavigationContainer>
                    <Routes />
                </NavigationContainer>
            </KeyboardAvoidingView>
        </AppProvider>
    );
}
