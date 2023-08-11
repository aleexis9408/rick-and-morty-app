// api/api.ts

import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: Origin;
}

interface Origin {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

// Función para obtener la lista de personajes
export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get(`${BASE_URL}character`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

// Función para obtener información de un origen por su URL
export const fetchOrigin = async (
  originURL: string,
): Promise<Origin | null> => {
  try {
    const response = await axios.get(originURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching origin:', error);
    return null;
  }
};

// Función para obtener información de los residentes de un origen
export const fetchResidents = async (
  residentURLs: string[],
): Promise<Character[]> => {
  try {
    const residents = await Promise.all(
      residentURLs.map(async url => {
        const response = await axios.get(url);
        return response.data;
      }),
    );
    return residents;
  } catch (error) {
    console.error('Error fetching residents:', error);
    return [];
  }
};
