interface ICharacter {
  name: string;
  specialMove: string;
}

interface IDbCharacter extends ICharacter {
  id: number;
}

const db: IDbCharacter[] = [];

interface IModel {
  create(character: ICharacter): Promise<IDbCharacter>;
  readAll(): Promise<ICharacter[]>;
  readOne(id: number): Promise<ICharacter>;
  update(id: number, character: ICharacter): Promise<IDbCharacter>;
  delete(id: number): Promise<boolean>;
}

class LocalDbModel implements IModel {
  create = async (character: ICharacter) => {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newCharacter = { id: lastId + 1, ...character };
    db.push(newCharacter);
    return newCharacter;
  };

  findIndexById = (id: number) => {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  update = async (id: number, character: ICharacter) => {
    const indexToUpdate = this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  delete = async (id: number) => {
    const indexToDelete = this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  readAll = async () => db;

  readOne = async (id: number) => {
    const indexToGet = this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model: IModel) { }

  async create(character: ICharacter) {
    const newCharacter = await this.model.create(character);
    return ({ status: 201, data: newCharacter });
  }

  async readAll() {
    const allCharacter = await this.model.readAll();
    return ({ status: 200, data: allCharacter });
  }

  async readOne(id: number) {
    const allCharacter = await this.model.readOne(id);
    return ({ status: 200, data: allCharacter });
  }

  async update(id: number, character: ICharacter) {
    const newCharacter = await this.model.update(id, character);
    return ({ status: 200, data: newCharacter });
  }

  async delete(id: number, character: ICharacter) {
    const newCharacter = await this.model.delete(id);
    return ({ status: 200, data: newCharacter });
  }
}

class MockDbModel implements IModel {
  async create(character: ICharacter) {
    console.log('character created');
    return { id: 1, name: 'Peach', specialMove: 'Toad' };
  }

  async update(id: number, character: ICharacter) {
    console.log('character updated');
    return { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' };
  }

  async delete(id: number) {
    console.log('character deleted');
    return true;
  }

  async readAll() {
    return [
      { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
      { id: 2, name: 'Kirby', specialMove: 'Inhale' },
    ];
  }

  async readOne(id: number) {
    return { id: 1, name: 'Mario', specialMove: 'Fireball' };
  }
}

const A = new CharacterService(new LocalDbModel());
A.readAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.readAll().then(console.log);