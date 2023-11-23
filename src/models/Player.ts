import {Creature} from "./Creature";

export class Player extends Creature {
    static playerCount: number = 0
    readonly name: string
    private health: number
    private level: number

    // Parameter based constructor
    constructor(name: string, health: number, level: number) {
        super();
        Player.playerCount += 1
        this.name = name
        this.health = health
        this.level = level
    }

    // Methods
    attack() {
        console.log(`${this.name} is attacking`)
    }

    defend() {
        console.log(`${this.name} is defending`)
    }

    // Getters for health
    getHealth(): number {
        return this.health
    }

    setHealth(healthValue: number) {
        if (healthValue < 0) {
            throw new Error("Health cannot be negative");
        }
        this.health = healthValue
    }

    locate(): void {
    }

    makeSound(): void {
        console.log(`${this.name} is making a sound`)
    }
}
