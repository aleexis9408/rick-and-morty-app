// screens/OriginScreen.tsx

import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import OriginCard from '../components/OriginCard';
import {useOriginDetails} from '../hooks/useOriginDetails';

const OriginScreen: React.FC = () => {
  const route = useRoute();
  const {originURL} = route.params as {originURL: string};
  const {originDetails, loading} = useOriginDetails(originURL);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : originDetails ? (
        <View>
          <OriginCard origin={originDetails} />
          <Text style={styles.residentsTitle}>Residents:</Text>
          <FlatList
            data={originDetails.residents}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.residentContainer}>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      ) : (
        <Text>No origin details available.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  residentsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
  residentContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginTop: 8,
  },
});

export default OriginScreen;
