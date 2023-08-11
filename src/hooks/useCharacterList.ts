// hooks/useCharacterList.ts

import {useEffect, useState} from 'react';
import {CharacterService} from '../services/characterService';

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

export const useCharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedCharacters = await CharacterService.getAllCharacters();
      setCharacters(fetchedCharacters);
      setLoading(false);
    };

    fetchData();
  }, []);

  return {characters, loading};
};
