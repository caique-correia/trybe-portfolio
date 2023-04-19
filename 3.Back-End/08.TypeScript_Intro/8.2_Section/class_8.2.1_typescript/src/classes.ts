interface Dog {
  _name: string,
  _age: string,
  _race: string,
}

class Dog {
  constructor(name: string, age: string, race: string) {
    this._name = name;
    this._age = age;
    this._race = race;
  }
}

interface House {
  _area: string,
  _propertyOf: string,
  _location: string,
}

class House {
  constructor(area: string, propertyOf: string, location: string) {
    this._area = area;
    this._propertyOf = propertyOf;
    this._location = location;
  }
}

interface Flight {
  _company: string,
  _departure: Date,
  _destiny: string,
}

class Flight {
  constructor(company: string, departure: Date, destiny: string) {
    this._company = company;
    this._departure = departure;
    this._destiny = destiny;
  }
}