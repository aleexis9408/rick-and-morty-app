import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigation from './src/navigation/rootNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
