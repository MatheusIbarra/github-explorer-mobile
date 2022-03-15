import { StorageDataProvider } from './storageData';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
    <ThemeProvider>
        <StorageDataProvider>{children}</StorageDataProvider>
    </ThemeProvider>
);

export default AppProvider;
