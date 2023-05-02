class Tv {
  brand: string;
  size: number;
  resulution: string;
  connections: string[];
  connectedTo?: string;

  constructor (
    brand: string,
    size: number,
    resulution: string,
    connections: string[],
  ) {
    this.brand = brand;
    this.size = size;
    this.resulution = resulution;
    this.connections = connections;
  }

  turnOn() {
    const strconn = this.connections.reduce((acc, cur, i) => i < this.connections.length - 1
      ? `${acc}, ${cur}`
      : `${acc} and ${cur}`);
    console.log(`${this.brand} TV, ${this.size} inches, ${this.resulution} with ${strconn} connections!`);
  }
}

const x1 = new Tv('LG', 33, '1080x720', ['VGA, HDMI, USB']);
x1.turnOn();