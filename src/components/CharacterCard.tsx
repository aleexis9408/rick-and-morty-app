// components/CharacterCard.tsx

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({character}) => {
  const navigation = useNavigation();
  const handleOriginPress = () => {
    navigation.navigate('Origin', {originURL: character?.origin?.url});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleOriginPress}>
      <Image source={{uri: character.image}} style={styles.image} />
      <Text>Name: {character.name}</Text>
      <Text>Status: {character.status}</Text>
      <Text>Species: {character.species}</Text>
      <Text>Gender: {character.gender}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 8,
  },
});

export default CharacterCard;
