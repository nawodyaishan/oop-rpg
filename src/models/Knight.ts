import {Player} from "./Player";

export class Knight extends Player {
    constructor(name: string, health: number, level: number, public armour: number) {
        super(name, health, level);
    }

    battle() {
        this.attack()
        super.defend()
    }

    protected attack() {
        console.log(`${this.name} is attacking with ${this.armour} armour`)
    }
}