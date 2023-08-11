import {CharacterService} from '../src/services/characterService';

describe('CharacterService', () => {
  it('should fetch characters successfully', async () => {
    const characters = await CharacterService.getAllCharacters();
    expect(characters).toHaveLength(20); // sAssuming default page size is 20
  });

  it('should fetch origin details successfully', async () => {
    const originURL = 'https://rickandmortyapi.com/api/location/1';
    const originDetails = await CharacterService.getOriginDetails(originURL);
    expect(originDetails).toHaveProperty('name');
    expect(originDetails).toHaveProperty('type');
    expect(originDetails).toHaveProperty('dimension');
    expect(originDetails?.residents).toBeInstanceOf(Array);
  });
});
