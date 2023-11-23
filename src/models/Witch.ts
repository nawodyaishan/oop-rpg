import {Player} from "./Player";
import {Villain} from "../interfaces/Villain";

export class Witch extends Player implements Villain {
    constructor(name: string, health: number, level: number) {
        super(name, health, level);
    }

    performEvilDeed(): void {
        console.log(`${this.name} performs an evil deed!`);
    }
}