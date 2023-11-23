import {Creature} from "./Creature";
import * as console from "console";

export class Animal extends Creature {
    static animalCount = 0;
    readonly name: string;

    constructor(name: string, health: number, level: number) {
        super();
        this.name = name;
        this._health = health;
        Animal.animalCount++;
    }

    protected _health: number;

    // Getter for health
    get health(): number {
        return this._health;
    }

    // Setter for health
    set health(value: number) {
        if (value < 0) {
            throw new Error("Health cannot be negative");
        }
        this._health = value;
    }

    makeSound(): void {
        console.log(`${this.name} screams!`);
    }

    locate(): void {
    }
}
