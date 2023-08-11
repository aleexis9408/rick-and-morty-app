// components/OriginCard.tsx

import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface Origin {
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

interface OriginCardProps {
  origin: Origin;
}

const OriginCard: React.FC<OriginCardProps> = ({origin}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: origin.residents[0]?.image}} style={styles.image} />
      <Text>Name: {origin.name}</Text>
      <Text>Type: {origin.type}</Text>
      <Text>Dimension: {origin.dimension}</Text>
      <Text>Residents:</Text>
      <FlatList
        data={origin.residents}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.residentContainer}>
            <Image source={{uri: item.image}} style={styles.residentImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
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
  residentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  residentImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
});

export default OriginCard;
