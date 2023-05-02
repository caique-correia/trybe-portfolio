class Tv {
  private _brand: string;
  private _size: number;
  private _resulution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor (
    brand: string,
    size: number,
    resulution: string,
    connections: string[],
  ) {
    this._brand = brand;
    this._size = size;
    this._resulution = resulution;
    this._connections = connections;
  }

  turnOn() {
    const strconn = this._connections.reduce((acc, cur, i) => i < this._connections.length - 1
      ? `${acc}, ${cur}`
      : `${acc} and ${cur}`);
    console.log(`${this._brand} TV, ${this._size} inches, ${this._resulution} with ${strconn} connections!`);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(connection: string | undefined) {
    if (!connection || this._connections.includes(connection)) {
      this._connectedTo = connection;
      console.log(connection);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const x1 = new Tv('LG', 33, '1080x720', ['VGA, HDMI, USB']);
x1.turnOn();