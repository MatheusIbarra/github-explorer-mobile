import { NavigationContainer } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, StatusBar, View } from 'react-native';
import { useTheme } from 'styled-components';
import Header from './src/components/Header';
import AppProvider from './src/hooks';
import { Routes } from './src/routes';

export default function App() {
    const theme = useTheme();
    return (
        <AppProvider>
            <StatusBar backgroundColor={'#040404'} ></StatusBar>
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
