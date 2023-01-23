class Persona {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const nicolas = new Persona(15, 'Nicolas');
nicolas.getSummary();
