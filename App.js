import { StatusBar } from 'react-native';
import AppWrapper from './src/app/AppWrapper';
import { PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      {/* <StatusBar style="light" /> */}
      <PaperProvider>
        <AuthProvider>
          <NavigationContainer>
            <AppWrapper />
          </NavigationContainer>
        </AuthProvider>
      </PaperProvider>
    </>
  );
}