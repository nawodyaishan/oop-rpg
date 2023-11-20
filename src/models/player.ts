export class Player {
    name: string
    health: number
    level: number

    constructor(nameValue: string, heathValue: number, levelValue: number) {
        this.name = nameValue;
        this.health = heathValue;
        this.level = levelValue;
    }

    attack() {
        console.log(`${this.name} is attacking!`)
    }

    defend() {
        console.log(`${this.name} is defending!`)
    }

    greet() {
        return `Hello, I am ${this.name}!`
    }
}