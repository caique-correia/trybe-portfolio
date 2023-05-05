abstract class Character {
  abstract talk(): void;
  abstract specialMoveName(): void;

  static characterActions(character: Character): void {
    character.talk();
    character.specialMoveName();
  }
}

class MeleeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) { super() }

  talk(): void {
    console.log('I\'ll protect you!');
  }

  specialMoveName(): void {
    console.log(this._specialMoveName);
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) { super() }

  talk(): void {
    console.log('Keep them away, I\'ll make this quick!');
  }
  
  specialMoveName(): void {
    console.log(this._specialMoveName);
  }
}

const yoshi = new MeleeCharacter('Yoshi', 'Imprisonment Chains!');
const samus = new LongRangeCharacter('Samus', 'Flaming Arrow Vortex!');

Character.characterActions(yoshi);
Character.characterActions(samus);

// yoshi.talk();
// yoshi.specialMoveName();

// samus.talk();
// samus.specialMoveName();