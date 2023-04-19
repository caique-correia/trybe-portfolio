type Bird = { name: string, species: string, origin: string, lifeExpectancy: { amount: number, time: string } };

type Sum = (x: number, y: number) => number;

type Address = {
  cep: number,
  country: string,
  state: string,
  city: string,
  district: string,
  street: string,
  number: number
};

type MatterStates = 'liquid' | 'solid' | 'gaseous';

type PersonID = string | number;

type OS = 'Linux' | 'Windows' | 'MacOS';

type Vowels = 'a' | 'e'| 'i' | 'o' | 'u';