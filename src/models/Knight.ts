import {Player} from "./Player";
import {Hero} from "../interfaces/Hero";
import * as console from "console";

export class Knight extends Player implements Hero {
    constructor(name: string, health: number, level: number, public armour: number) {
        super(name, health, level);
    }

    makeSound() {
        console.log(`${this.name} fights with a sword!`)
    }

    performHeroicAction(): void {
        console.log(`t${this.name} performs heroic action`)
    }
}
