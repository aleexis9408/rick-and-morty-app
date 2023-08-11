// screens/CharacterListScreen.tsx

import React, {Suspense} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import CharacterCard from '../components/CharacterCard';
import {useCharacterList} from '../hooks/useCharacterList';

const CharacterListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Character List</Text>
      <Suspense
        fallback={
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }>
        <CharacterList />
      </Suspense>
    </View>
  );
};

const CharacterList: React.FC = () => {
  const {characters} = useCharacterList();

  return (
    <FlatList
      data={characters}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <CharacterCard character={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CharacterListScreen;
