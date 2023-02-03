import {filterGender, filterStatus, filterSpecies, ordenAZ, ordenZA} from '../src/data.js';

const dataRickAndMorty = {
  "results": [
    {
      id: 13,
      name: 'Alien Googah',
      status: 'unknown',
      species: 'Alien',
      gender: 'unknown',
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      gender: 'Male',   
    },
    {
      id: 34,
      name: 'Benjamin',
      status: 'Alive',
      species: 'Poopybutthole',
      gender: 'Male', 
    },
    {
      id: 41,
      name: 'Big Boobed Waitress',
      status: 'Alive',
      species: 'Humanoid',
      gender: 'Female',
    },
  ]
};
const data = dataRickAndMorty.results;
 
describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns female characters when "Female" is selected', () => {
    expect(filterGender(data, "Female")).toStrictEqual([{
      "id": 41,
      "name": 'Big Boobed Waitress',
      "status": 'Alive',
      "species": 'Humanoid',
      "gender": 'Female',
    }]);
  });

  it('matches if the object contains the gender property', () => {
    expect(filterGender(data, "Female")).toHaveProperty(data, data['gender']);
  });
});

describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  it('returns dead characters when "Dead" is selected', () => {
    expect(filterStatus(data, "Dead")).toStrictEqual([{
      "id": 8,
      "name": "Adjudicator Rick",
      "status": "Dead",
      "species": "Human",
      "gender": "Male",
    }]);
  });
});

describe('filterSpecies', () => {
  it('is a function', () => {
    expect(typeof filterSpecies).toBe('function');
  });

  it('returns alien characters when "alien" is selected', () => {
    expect(filterSpecies(data, "Alien")).toStrictEqual([{
      "id": 13,
      "name": "Alien Googah",
      "status": "unknown",
      "species": "Alien",
      "gender": "unknown",
      
    }]);
  });
});

describe('ordenAZ', () => {
  it('is a function', () => {
    expect(typeof ordenAZ).toBe('function');
  });

  it('returns true if the ordenAZ() function orders name from A to Z', () => {
    expect(ordenAZ(data)).toEqual([
      {
        "id": 8,
        "name": 'Adjudicator Rick',
        "status": 'Dead',
        "species": 'Human',
        "gender": 'Male', 
      },
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "gender": "unknown",
      },
      {
        "id": 34,
        "name": 'Benjamin',
        "status": 'Alive',
        "species": 'Poopybutthole',
        "gender": 'Male', 
      },
      {
        "id": 41,
        "name": 'Big Boobed Waitress',
        "status": 'Alive',
        "species": 'Humanoid',
        "gender": 'Female',
      }]);
  });
});

describe('ordenZA', () => {
  it('is a function', () => {
    expect(typeof ordenZA).toBe('function');
  });

  it('returns true if the ordenZA() function orders name from Z to A', () => {
    expect(ordenZA(data)).toStrictEqual([ 
      {
        "id": 41,
        "name": 'Big Boobed Waitress',
        "status": 'Alive',
        "species": 'Humanoid',
        "gender": 'Female',
      },
      {
        "id": 34,
        "name": 'Benjamin',
        "status": 'Alive',
        "species": 'Poopybutthole',
        "gender": 'Male', 
      },
      {
        "id": 13,
        "name": "Alien Googah",
        "status": "unknown",
        "species": "Alien",
        "gender": "unknown",
      },
      {
        "id": 8,
        "name": 'Adjudicator Rick',
        "status": 'Dead',
        "species": 'Human',
        "gender": 'Male', 
      }]);
  });
});


// import { data } from './testing-data'

// describe('filterGender', () => {
//   it('is a function', () => {
//     expect(typeof filterGender).toBe('function');
//   });

//   it('should return gender male and unknown', () => {
//     const searchResult = filterGender(data, 'gender')
//     expect(searchResult.length).toEqual(2)
//     expect(searchResult[0].name).toEqual('Male');
//     expect(searchResult[1].name).toEqual('unknown');
//   });
// })

// describe('filterStatus', () => {
//   it('is a function', () => {
//     expect(typeof filterStatus).toBe('function');
//   });

//   it('should return status alive and dead', () => {
//     const searchResult = filterStatus(data, 'status')
//     expect(searchResult.length).toEqual(2)
//     expect(searchResult[0].name).toEqual('Alive');
//     expect(searchResult[1].name).toEqual('Dead');
//   });
// })

// describe('filterSpecies', () => {
//   it('is a function', () => {
//     expect(typeof filterSpecies).toBe('function');
//   });

//   it('should return species Poopybutthole, Mytholog and Humanoid', () => {
//     const searchResult = filterSpecies(data, 'species')
//     expect(searchResult.length).toEqual(3)
//     expect(searchResult[0].name).toEqual('Poopybutthole');
//     expect(searchResult[1].name).toEqual('Mytholog');
//     expect(searchResult[2].name).toEqual('Humanoid')
//   });
// })

// describe('ordenAZ', ()=> {
//   it('is a function', () => {
//     expect(typeof ordenAZ).toBe('function');
//   });

//   it('should return 7 characters in ascendent order for A to Z', () => {
//     const searchResult = ordenAZ(data, 'A-Z')
//     expect(searchResult,length).toEqual(7)
//     expect(searchResult[0].name).toEqual('Abadango Cluster Princess');
//     expect(searchResult[1].name).toEqual('Adjudicator Rick');
//     expect(searchResult[2].name).toEqual('Alexander');
//     expect(searchResult[3].name).toEqual('Alien Googah');
//     expect(searchResult[4].name).toEqual('Benjamin');
//     expect(searchResult[5].name).toEqual('Big Boobed Waitress');
//     expect(searchResult[6].name).toEqual('Goddess Beth');
//   });
// })

// describe('ordenZA', ()=> {
//   it('is a function', () => {
//     expect(typeof ordenZA).toBe('function');
//   });

//   it('should return 7 characters in descendent order for Z to A', () => {
//     const searchResult = ordenZA(data, 'Z-A')
//     expect(searchResult,length).toEqual(7)
//     expect(searchResult[0].name).toEqual('Goddess Beth');
//     expect(searchResult[1].name).toEqual('Big Boobed Waitress');
//     expect(searchResult[2].name).toEqual('Benjamin');
//     expect(searchResult[3].name).toEqual('Alien Googah');
//     expect(searchResult[4].name).toEqual('Alexander');
//     expect(searchResult[5].name).toEqual('Adjuticator Rick');
//     expect(searchResult[6].name).toEqual('Abadango Cluster Princess');
//   });
// })

//This is the content for the other tests in a different js sheet
// export const data = [
//   {
//     id: 12,
//     name: 'Alexander',
//     status: 'Dead',
//     species: 'Human',
//     gender: 'Male',
//   },
//   {
//     id: 13,
//     name: 'Alien Googah',
//     status: 'unknown',
//     species: 'Alien',
//     gender: 'unknown',
//   },
//   {
//     id: 6,
//     name: 'Abadango Cluster Princess',
//     status: 'Alive',
//     species: 'Alien',
//     gender: 'Female',
//   },
//   {
//     id: 8,
//     name: 'Adjudicator Rick',
//     status: 'Dead',
//     species: 'Human',
//     gender: 'Male', 
//   },
//   {
//     id: 34,
//     name: 'Benjamin',
//     status: 'Alive',
//     species: 'Poopybutthole',
//     gender: 'Male', 
//   },
//   {
//     id: 148,
//     name: 'Goddess Beth',
//     status: 'unknown',
//     species: 'Mytholog',
//     gender: 'Female', 
//   },
//   {
//     id: 41,
//     name: 'Big Boobed Waitress',
//     status: 'Alive',
//     species: 'Humanoid',
//     gender: 'Female', 
//   },
// ];
