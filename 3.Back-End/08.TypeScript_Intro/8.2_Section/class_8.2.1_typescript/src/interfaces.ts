interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

interface Teacher extends Employee {
  subject: string;
  sayHello(): string;
}

let employee: Employee = {
  firstName: "John",
  lastName: "Doe",
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello(): string {
    return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

interface Car {
  company: string,
  model: string,
  releaseYear: number,
}

interface Feline {
  name: string,
  specie: string,
  size: () => string,
}

interface Airship {
  company: string,
  model: string,
  purpose: string,
}