import {filterGender, filterStatus, filterSpecies, ordenAZ, ordenZA, search} from '../src/data.js';
import { data } from './testing-data'

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('should return gender male and unknown', () => {
    const searchResult = filterGender(data, 'gender')
    expect(searchResult.length).toEqual(2)
    expect(searchResult[0].name).toEqual('Male');
    expect(searchResult[1].name).toEqual('unknown');
  });
})

describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('should return status alive and dead', () => {
    const searchResult = filterStatus(data, 'status')
    expect(searchResult.length).toEqual(2)
    expect(searchResult[0].name).toEqual('Alive');
    expect(searchResult[1].name).toEqual('Dead');
  });
})

describe('filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('should return species Poopybutthole, Mytholog and Humanoid', () => {
    const searchResult = filterSpecies(data, 'species')
    expect(searchResult.length).toEqual(3)
    expect(searchResult[0].name).toEqual('Poopybutthole');
    expect(searchResult[1].name).toEqual('Mytholog');
    expect(searchResult[2].name).toEqual('Humanoid')
  });
})

describe('ordenAZ', ()=> {
  it('is a function', () => {
    expect(typeof ordenAZ).toBe('function');
  });

  it('should return 7 characters in ascendent order for A to Z', () => {
    const searchResult = ordenAZ(data, 'A-Z')
    expect(searchResult,length).toEqual(7)
    expect(searchResult[0].name).toEqual('Abadango Cluster Princess');
    expect(searchResult[1].name).toEqual('Adjudicator Rick');
    expect(searchResult[2].name).toEqual('Alexander');
    expect(searchResult[3].name).toEqual('Alien Googah');
    expect(searchResult[4].name).toEqual('Benjamin');
    expect(searchResult[5].name).toEqual('Big Boobed Waitress');
    expect(searchResult[6].name).toEqual('Goddess Beth');
  });
})

describe('ordenZA', ()=> {
  it('is a function', () => {
    expect(typeof ordenZA).toBe('function');
  });

  it('should return 7 characters in descendent order for Z to A', () => {
    const searchResult = ordenZA(data, 'Z-A')
    expect(searchResult,length).toEqual(7)
    expect(searchResult[0].name).toEqual('Goddess Beth');
    expect(searchResult[1].name).toEqual('Big Boobed Waitress');
    expect(searchResult[2].name).toEqual('Benjamin');
    expect(searchResult[3].name).toEqual('Alien Googah');
    expect(searchResult[4].name).toEqual('Alexander');
    expect(searchResult[5].name).toEqual('Adjuticator Rick');
    expect(searchResult[6].name).toEqual('Abadango Cluster Princess');
  });
})

