// services/CharacterService.ts

import {fetchCharacters, fetchOrigin, fetchResidents} from '../api/api';

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
  residents: Character[];
}

export const CharacterService = {
  getAllCharacters: async (): Promise<Character[]> => {
    try {
      const characters = await fetchCharacters();
      return characters;
    } catch (error) {
      console.error('Error fetching characters:', error);
      return [];
    }
  },

  getOriginDetails: async (originURL: string): Promise<Origin | null> => {
    try {
      const origin = await fetchOrigin(originURL);
      if (origin) {
        const residents = await fetchResidents(origin.residents);
        origin.residents = residents;
      }
      return origin;
    } catch (error) {
      console.error('Error fetching origin details:', error);
      return null;
    }
  },
};
