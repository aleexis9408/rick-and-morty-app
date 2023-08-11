// hooks/useOriginDetails.ts

import {useEffect, useState} from 'react';
import {CharacterService} from '../services/characterService';

interface Origin {
  name: string;
  type: string;
  dimension: string;
  residents: Character[];
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export const useOriginDetails = (originURL: string) => {
  const [originDetails, setOriginDetails] = useState<Origin | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOriginData = async () => {
      const fetchedOriginDetails = await CharacterService.getOriginDetails(
        originURL,
      );
      setOriginDetails(fetchedOriginDetails);
      setLoading(false);
    };

    fetchOriginData();
  }, [originURL]);

  return {originDetails, loading};
};
