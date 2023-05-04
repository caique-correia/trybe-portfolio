class Superclass {
  constructor (
    public isSuper: boolean = true,
  ) { }

  public sayHello() {
    console.log('Olá, mundo!')
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log( object.isSuper ? 'Super!' : 'Sub!')
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);

// SECOND;
interface MyInterface {
  myNumber: number;
  myFunc: (myParam: number) => string;
}

class MyClass implements MyInterface {
  constructor(
    public myNumber = 10,
  ) { }

  myFunc = (myParam: number) => `${this.myNumber} + ${myParam} = ${this.myNumber + myParam}`;
}

const myObject = new MyClass(7);

console.log(myObject.myFunc(5));

// THIRD;
interface Logger {
  log: (param: string) => void;
}

interface Database {
  logger: Logger;
  save: (key: string, value: string) => void;
}

class ConsoleLogger implements Logger {
  log = (param: string) => console.log(`Sim, ${param}!`);
}

class ConsoleLogger2 implements Logger {
  log = (param: string) => console.log(`Não, ${param}!`);
}

class ExampleDatabase implements Database {
  constructor(
    public logger: Logger = new ConsoleLogger()
  ) { }

  save = (key: string, value: string): void => this.logger.log(`Salvando o valor ${value} na chave ${key}`);
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');