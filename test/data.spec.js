import { search, order, filterByGeneration, filterByType } from '../src/data.js';
import { data } from './testing-data'

// Se crea un array que contenga

const toEqual3 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
];

const toEqual4 = [
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
];

const toEqual5 = [
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
];

const toEqual6 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '005',
    name: 'charmeleon',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'fire',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
  {
    num: '060',
    name: 'poliwag',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'water',
    ],
  },
  {
    num: '173',
    name: 'cleffa',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'fairy',
    ],
  },
  {
    num: '200',
    name: 'misdreavus',
    generation: {
      num: 'generation ii',
      name: 'johto',
    },
    pokemonRarity: 'normal',
    type: [
      'ghost',
    ],
  },
];
const toEqual7 = [
  {
    num: '001',
    name: 'bulbasaur',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'grass',
      'poison',
    ],
  },
  {
    num: '024',
    name: 'arbok',
    generation: {
      num: 'generation i',
      name: 'kanto',
    },
    pokemonRarity: 'normal',
    type: [
      'poison',
    ],
  },
];



describe('filterByGeneration', () => {
  it('is a function', () => {
    expect(typeof filterByGeneration).toBe('function');
  });

  it('should return the right amount of items in array',()=>{
    expect(filterByGeneration(data, 'johto').length).toEqual(2)
  })

  it('should return an empty array when search its not matching whith the entered letters', () => {
    expect(filterByGeneration(data, 'xxwe')).toEqual([]);
  });

  it('should return two specific pokemons', () => {
    const searchResult = filterByGeneration(data, 'johto')
    expect(searchResult[0].name).toEqual('cleffa');
    expect(searchResult[1].name).toEqual('misdreavus');
  });

  it('should have all returned pokemons be from johto region only',()=>{
    const searchResult = filterByGeneration(data, 'johto')
    const regionsFound = searchResult.map(el => el.generation.name)
    const onlyUnique = regionsFound.filter((value, index, self) => {
      return self.indexOf(value) === index;
    })
    expect(onlyUnique).toEqual(['johto']);
  })
})

describe('search', () => {
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('should return an empty array when search its not matching whith the entered letters', () => {
    expect(search(data, 'xxwe')).toEqual([]);
  });

  it('should return a pokemon when the first letters are matching', () => {
    expect(search(data, 'bul')).toEqual(toEqual3);
  });
});

// Alphabetical order
describe('order', () => {
  it('is a function', () => {
    expect(typeof order).toBe('function');
  });

  
  it('should return a complete array from A to Z', () => {
    expect(order(data, 'A-Z')).toEqual(toEqual4);
  });

  it('should return a complete array from Z to A', () => {
    expect(order(data, 'Z-A')).toEqual(toEqual5);
  });

  it('should return an upward complete ordered array', () => {
    expect(order(data, 'default')).toEqual(toEqual6);
  });
});

// Filter by type
describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('should return an array with same-type-pokemons', () => {
    expect(filterByType(data, 'poison')).toEqual(toEqual7);
  });
});

// eliminar toEqual