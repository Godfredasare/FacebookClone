import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './routes';
import TopLogo from './topLogo';


export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <TopLogo />
            <StatusBar style="auto" />
      <HomeNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d6d5',   
  },
});
